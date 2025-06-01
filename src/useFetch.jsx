import { useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const patchData = async (url, updatedFields) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(updatedFields),
      });
      if (!res.ok) throw new Error("업데이트 실패");
      await res.json();
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { patchData, isLoading, error };
};
export default useFetch;
