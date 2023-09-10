// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// export {default} from '@docusaurus/Noop';
import React, {useState, useEffect, useRef, useCallback} from "react";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from '@docusaurus/useGlobalData';
import useIsBrowser from "@docusaurus/useIsBrowser";
import "./searchBar.scss";

export default function SearchBar(props) {
  const initialized = useRef(false);
  const [indexReady, setIndexReady] = useState(false);
  const [showSearch, setSearchShow] = useState(false);
  const [searchText, setSearchText] = useState("")
  const input = useRef();
  const isBrowser = useIsBrowser();
  const history = useHistory();
  const pluginData = usePluginData('local-search');

  const { siteConfig = {} } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
    new DocSearch({
      searchDocs,
      searchIndex,
      baseUrl,
      debug: true,
      inputSelector: "#search_input_react",
      handleSelected: (_input, _event, suggestion) => {
        const url = suggestion.url || "/";
        const a = document.createElement("a");
        a.href = url;
        history.push(url);
      },
      queryDataCallback: (...args) => {
        console.log(args);
      }
    });
  };
  const getSearchDoc = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then(
        (content) => content.json()
      )
      : Promise.resolve([]);
  const getLunrIndex = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then(
        (content) => content.json()
      )
      : Promise.resolve([]);
  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import("./DocSearch"),
        import("./test.css")
      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
        console.log('loadAlgolia', searchDocs, searchIndex, { default: DocSearch })

        if (searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
        setIndexReady(true);
      });
      initialized.current = true;
    }
  };
  if (isBrowser) {
    loadAlgolia();
  }


  const showSearchClick = (isShow) => () => {
    setSearchShow(isShow);

    if (isShow) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

  const onKeyDown = e => {

    if (e.code === 'Escape') {
      showSearchClick(false)();
    } else if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      showSearchClick(true)();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(showSearchClick(false), [history.location.pathname]);

  return (
    <>
      {/* 导航条 */}
      <div className="search-bar" >
        <div className="search-bar-btn" onClick={showSearchClick(true)}>
          <div className="search-bar-icon flex-center">
            <SymbolsSearch color="#999"/>
          </div>
          <div className="search-bar-placeholder flex-center">搜索 Ctrl + K</div>
        </div>
      </div>

      {/* 弹窗搜索 */}
      <section className="search-dialog" style={{
        display: showSearch ? "block" : "none"
      }}>
        <div className="search-dialog-content">
          <div className="search-dialog-input" onClick={e => input.current.focus()}>
            <div className="flex-center">
              <SymbolsSearch color="var(--ifm-color-primary)" style={{
                fontSize: "1.3em",
                cursor: "pointer"
              }} />
            </div>
            <div className="flex-center search-dialog-input-inner navbar__search" key="search-box">
              {/*
                    onChange={e => setSearchText(e.target.value)}
                    value={searchText}
                  */}
              <span
                aria-label="expand searchbar"
                role="button"
                tabIndex={0}
              />
              <input
                id="search_input_react"
                ref={input}
                type="search"
                aria-label="Search"
                placeholder={indexReady ? '输入要查找的内容' : '搜索中...'}
                disabled={!indexReady}
                onClick={loadAlgolia}
                onMouseOver={loadAlgolia}
              />
            </div>
            <div className="flex-center" onClick={e => setSearchText("")}>
              <SymbolsClose color="#aaa" style={{
                fontSize: "1.2em",
                cursor: "pointer"
              }} />
            </div>
          </div>
          <div className="search-dialog-body">
            <div>search-dialog-body</div>
            <div>

            </div>
            <div></div>

          </div>
          <div className="search-dialog-foot">
            <div>
                  <span>
                    <CodeStyle>esc</CodeStyle>关闭
                  </span>
              {/*<span>*/}
              {/*  <CodeStyle>Ctrl + k</CodeStyle>开启*/}
              {/*</span>*/}
            </div>
            <div></div>
          </div>
        </div>

        <div
          className="search-dialog-mask"
          onClick={showSearchClick(false)}
        >
        </div>
      </section>
    </>
  )
}

function SymbolsSearch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path>
    </svg>
  )
}

function SymbolsClose(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path></svg>
  )
}

function CodeStyle(props) {
  return (
    <kbd style={{
      color: "var(--kbd-colo)",
      boxShadow: "var(--kbd-box-shadow)",
      marginRight: ".4em",
      background: "var(--kbd-bg)"
    }} {...props}>{ props.children }</kbd>
  )
}
