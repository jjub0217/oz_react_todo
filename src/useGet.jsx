import { useEffect, useState } from "react";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, data, error };
};
export default useGet;
