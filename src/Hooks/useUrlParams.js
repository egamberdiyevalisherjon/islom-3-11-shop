import { useLocation } from "react-router-dom";

function useUrlParams() {
  let location = useLocation();
  let p = new URLSearchParams(location.search.slice(1));
  let queries = {};

  for (let a of p) {
    queries[a[0]] = a[1];
  }

  return queries;
}

export default useUrlParams;
