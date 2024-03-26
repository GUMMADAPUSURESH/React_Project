import { useEffect, useState } from "react";

export const useCount = (count) => {
    useEffect(() => {
        document.title = `React - ${count}`;
    }, [count])
};

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const resetCounter = () => {
        setCounter(initialValue);
    }

    return [counter, increment, decrement, resetCounter]
};

export const useFetchAPI = (URL) => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({status: false, msg: ''});

    const fetchApi = async () => {
        setIsLoading(true);
        setIsError({status: false, msg: ''})
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setApiData(data);
            setIsLoading(false);
            setIsError({status: false, msg: ''});
            if(response.status === 404) {
                throw new Error('Data Not Found')
            }
        }
        catch (error) {
            setIsError({status: true, msg: error.message || 'Something went wrong...'})
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return [apiData, isLoading, isError]
}