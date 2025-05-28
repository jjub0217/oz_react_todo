import useFetch from "./useFetch";
const Advice = () => {
  const { isLoading, data, error } = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice"
  );

  console.log(isLoading);
  console.log(data);
  console.log(error);

  // useEffect(() => {
  //   if (isRunning) {
  //     intervalRef.current = setInterval(() => {
  //       setElapsedTime((prev) => prev + 1);
  //     }, 1000);
  //   }

  //   return () => clearInterval(intervalRef.current);
  // }, [isRunning]);

  // const handleStartStop = () => {
  //   setIsRunning((prev) => !prev);
  // };

  // const handleReset = () => {
  //   clearInterval(intervalRef.current);
  //   setElapsedTime(0);
  //   setIsRunning(false);
  // };

  return (
    <>
      {!isLoading && (
        <>
          <div>{data.message}</div>
          <div>{data.author}</div>
        </>
      )}
    </>
  );
};
export default Advice;
