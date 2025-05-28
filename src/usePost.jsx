import { useState } from "react";

const usePost = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendData = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setResponse(result);
      return result;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendData, isLoading, response, error };
};
export default usePost;
