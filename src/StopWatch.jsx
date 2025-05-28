import { useEffect, useRef, useState } from "react";
import { formatTime } from "./utils/formatTime";

const StopWatch = () => {
  // 1시간 : 3600초 (60초가 60개)
  // 1분 : 60초

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // 타이머 ID 저장용

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>{formatTime(elapsedTime, true)}</h1>
      <button onClick={handleStartStop}>{isRunning ? "끄기" : "켜기"}</button>
      <button onClick={handleReset}>리셋</button>
    </>
  );
};
export default StopWatch;
