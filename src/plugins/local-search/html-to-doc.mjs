// const { parentPort, workerData } = require('worker_threads')
import { parentPort, workerData } from "worker_threads"

// const unified = require('unified')
import {unified} from "unified";
// const parse = require('rehype-parse')
import parse from "rehype-parse";
// const select = require('hast-util-select').select
// const selectAll = require('hast-util-select').selectAll
import {select, selectAll} from "hast-util-select";
// const toText = require('hast-util-to-text')
import {toText} from 'hast-util-to-text'
// const is = require('unist-util-is')
import {is} from "unist-util-is";
// const toVfile = require('to-vfile')
import {toVFile, readSync} from 'to-vfile'

const sectionHeaderTest = ({ tagName }) => ['h2', 'h3'].includes(tagName)
const customSectionHeaderTest = ({ properties }) => properties && properties.dataSearchChildren

// Build search data for a html
function* scanDocuments({ path, url }) {
  let vfile
  try {
    vfile = readSync(path)
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error(`docusaurus-lunr-search:: unable to read file ${path}`)
      console.error(e)
    }
    return
  }

  const hast = unified()
    .use(parse, { emitParseErrors: false })
    .parse(vfile)

  const article = select('article', hast)
  if (!article) {
    return
  }
  const markdown = select('.markdown', article)
  if (!markdown) {
    return
  }

  const pageTitleElement = select('h1', article)
  if (!pageTitleElement) {
    return
  }
  const pageTitle = toText(pageTitleElement)
  const sectionHeaders = getSectionHeaders(markdown)

  const keywords = selectAll('meta[name="keywords"]', hast).reduce((acc, metaNode) => {
    if (metaNode.properties.content) {
      return acc.concat(metaNode.properties.content.replace(/,/g, ' '))
    }
    return acc
  }, []).join(' ')

  let version = null;
  if (workerData.loadedVersions) {
    const docsearchVersionElement = select('meta[name="docsearch:version"]', hast);

    version = docsearchVersionElement
      ? workerData.loadedVersions[docsearchVersionElement.properties.content]
      : null;
  }

  yield {
    title: pageTitle,
    type: 0,
    sectionRef: '#',
    url,
    // If there is no sections then push the complete content under page title
    content: sectionHeaders.length === 0 ? getContent(markdown) : '',
    keywords,
    version,
  }

  for (const sectionDesc of sectionHeaders) {
    const { title, content, ref, tagName } = sectionDesc;
    yield {
      title,
      type: 1,
      pageTitle,
      url: `${url}#${ref}`,
      content,
      version,
      tagName
    }
  }
}

function getContent(element) {
  return toText(element).replace(/\s\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, ' ').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function getSectionHeaders(element, result = []) {
  let currentSection = null
  let contentsAcc = ''
  const emitCurrent = () => {
    const ref = select('.anchor', currentSection)
    result.push({
      title: toText(currentSection).replace(/^#+/, '').replace(/#$/, ''),
      ref: ref ? ref.properties.id : '#',
      tagName: currentSection.tagName || '#',
      content: contentsAcc,
    })
    contentsAcc = ''
    currentSection = null
  }

  for (const node of element.children) {
    if (is(node, sectionHeaderTest)) {
      if (currentSection) {
        emitCurrent()
      }
      currentSection = node
    } else if (is(node, customSectionHeaderTest)) {
      getSectionHeaders(node, result)
    }
    else if (currentSection) {
      contentsAcc += getContent(node) + ' '
    }
  }
  if (currentSection) {
    emitCurrent()
  }

  return result
}

function processFile(file) {
  let scanned = 0
  for (const doc of scanDocuments(file)) {
    scanned = 1
    parentPort.postMessage([true, doc])
  }
  parentPort.postMessage([null, scanned])
}

parentPort.on('message', (maybeFile) => {
  if (maybeFile) {
    processFile(maybeFile)
  } else {
    parentPort.close()
  }
})
