import { useCallback, useEffect, useState } from "react";

export const useCount = (count) => {
  useEffect(() => {
    document.title = `Suresh-App - ${count}`;
  }, [count]);
};

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return [counter, increment, decrement, resetCounter];
};

export const useFetchAPI = (URL) => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL, { method: 'GET' });
      if (response.status === 404) {
        throw new Error("Data Not Found");
      }
      const data = await response.json();
      setApiData(data);
      setIsLoading(false);
      setIsError({ status: false, msg: "" });
    } catch (error) {
      setIsError({
        status: true,
        msg: error.message || "Something went wrong...",
      });
      setIsLoading(false);
    }
  }, [URL]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return [apiData, isLoading, isError];
};

// export const useFetchAPI = (URL) => {
//   const [apiData, setApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState({ status: false, msg: "" });

//   const fetchApi = useCallback(() => {
//     setIsLoading(true);
//     const xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open("GET", URL, true);

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         setApiData(data);
//         setIsError({ status: false, msg: "" });
//       } else {
//         setIsError({ status: true, msg: "Data Not Found" });
//       }
//       setIsLoading(false);
//     };

//     xhr.onerror = function () {
//       setIsError({ status: true, msg: "Something went wrong..." });
//       setIsLoading(false);
//     };

//     xhr.send();
//   }, [URL]);

//   useEffect(() => {
//     fetchApi();
//   }, [fetchApi]);

//   return [apiData, isLoading, isError];
// };
