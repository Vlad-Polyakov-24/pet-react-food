import {useState, useCallback} from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const throwError = response => {
    const errorText = `Статус: ${response.status}, помилка запиту!`;
    throw new Error(errorText);
  }

  const sendHttpRequest = useCallback(async (url, options = {
    method: 'GET',
    body: null,
    headers: {
      'Content-Type': 'application/json',
    },
  }, dataHandler) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: options.method,
        body: JSON.stringify(options.body),
        headers: options.headers,
      });
      if (!response.ok) throwError(response);
      const data = await response.json();
      if (dataHandler) dataHandler(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendHttpRequest,
  }
};

export default useHttp;