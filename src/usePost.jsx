import { useState } from "react";

const usePost = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendData = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("서버 응답 오류");
      const result = await res.json();
      setResponse(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendData, isLoading, response, error };
};
export default usePost;
