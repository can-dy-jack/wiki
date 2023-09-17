// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// export {default} from '@docusaurus/Noop';
import React, {useState, useEffect, useRef} from "react";
import {SymbolsSearch, SymbolsClose, CodeStyle} from "./lib/components";
import {useHistory} from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {usePluginData} from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";
import "./searchBar.scss";
import Search from "./lib/Search";

export default function SearchBar(props) {
  const [showSearch, setSearchShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const input = useRef();
  const history = useHistory();
  const pluginData = usePluginData('local-search');

  const {siteConfig = {}} = useDocusaurusContext();
  const {baseUrl} = siteConfig;

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
  const loadAlgolia = (e) => {
    setSearchText(e.target.value);

    Promise.all([
      getSearchDoc(),
      getLunrIndex(),
    ]).then(([searchDocs, searchIndex]) => {
      // console.log('loadAlgolia', searchDocs, searchIndex)
      if (searchDocs.length === 0) return;
      SearchText(searchDocs, searchIndex, e.target.value);
    }, console.warn);
  };
  const SearchText = (searchDocs, searchIndex, input) => {
    Search(searchDocs, searchIndex, input.trim(), baseUrl).then(res => {
      setSearchResult(res);
    });
  };

  const showSearchClick = (isShow) => () => {
    setSearchShow(isShow);

    if (isShow) {
      setSearchResult([]);
      setSearchText("");
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

  const clearSearch = () => {
    setSearchText("");
    setSearchResult([]);
  }
  const clickSearch = () => {
    setSearchResult([]);
    loadAlgolia({target: {value: searchText}});
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
      <div className="search-bar">
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
            <div className="flex-center" onClick={clickSearch}>
              <SymbolsSearch color="var(--ifm-color-primary)" style={{
                fontSize: "1.3em",
                cursor: "pointer"
              }}/>
            </div>
            <div className="flex-center search-dialog-input-inner">
              <input
                id="search_input_react"
                ref={input}
                aria-label="Search"
                placeholder='输入要查找的内容'
                onChange={loadAlgolia}
                value={searchText}
                autoComplete="off"
              />
            </div>
            <div className="flex-center" onClick={clearSearch}>
              <SymbolsClose color="#aaa" style={{
                fontSize: "1.2em",
                cursor: "pointer"
              }}/>
            </div>
          </div>
          <div className="search-dialog-body">
            <section className="search-result">
              {
                (searchResult && searchResult.length > 0) ? searchResult.map((item, index) => {
                  let Lel0 = () => {
                    if (index > 0 && searchResult[index - 1].hierarchy.lvl0 === item.hierarchy.lvl0) {
                      return (<></>);
                    } else {
                      return (<div className="search-result-lvl0">{item.hierarchy.lvl0}</div>);
                    }
                  };
                  return (
                    <>
                      <Lel0 />
                      <Link
                        href={item.url || "/"}
                        key={index}
                        aria-label="Link to the result"
                        className="search-result-item"
                        onClick={showSearchClick(false)}
                      >
                        <div className="search-result-lvl1">{item.hierarchy.lvl1}</div>
                        <div className="search-result-content">
                          {
                            item._highlightResult && (
                              <div>
                                {
                                  item._highlightResult.hierarchy.lvl1 ? (
                                    <div
                                      dangerouslySetInnerHTML={{__html: item._highlightResult.hierarchy.lvl1?.value}}
                                      className="search-result-item-title-lvl1"
                                    ></div>
                                  ) : (
                                    <div
                                      dangerouslySetInnerHTML={{__html: item._highlightResult.hierarchy.lvl0?.value}}
                                      className="search-result-item-title-lvl0"
                                    ></div>
                                  )
                                }
                              </div>
                            )
                          }
                          {
                            item._snippetResult &&
                            (<div
                              dangerouslySetInnerHTML={{__html: item._snippetResult.content.value}}
                              className="search-result-item-content"
                            >
                            </div>)
                          }
                        </div>
                      </Link>
                    </>
                  )
                }) : (
                  <div className="search-result-empty">No results found{
                    searchText ?
                      <span dangerouslySetInnerHTML={{__html: ` for  query <b>${searchText}</b>`}}></span> :
                      ''
                  } .</div>
                )
              }
            </section>
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

