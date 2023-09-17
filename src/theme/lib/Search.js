import SearchAdapter from "./SearchAdapter";

export default function Search (searchDocs, searchIndex, input, baseUrl = '/') {
  const client = new SearchAdapter(searchDocs, searchIndex, baseUrl);

  return client.search(input || "").then(hits => {
    return hits;
  });
}