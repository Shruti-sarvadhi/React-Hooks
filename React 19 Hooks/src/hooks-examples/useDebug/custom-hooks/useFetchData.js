import { useState, useEffect, useDebugValue } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useDebugValue(loading ? "Fetching data..." : "Data loaded");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetchData