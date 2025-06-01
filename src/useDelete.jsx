import { useState } from "react";

const useDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "delete",
      });
      if (!res.ok) throw new Error("삭제 실패");
      return true;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteData, isLoading, error };
};
export default useDelete;
