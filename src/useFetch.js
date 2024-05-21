import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    //this method is used ti delay the displaying by 1 sec
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not Get data from server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort;
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
