import { useEffect, useRef, useState } from "react";
import { formatTime } from "./utils/formatTime";
const Timer = ({
  elapsedTime,
  setElapsedTime,
  selectedTodoId,
  updateFetchTimeForTodo,
}) => {
  // 내가 30초로 설정하면.
  // 30초 부터 시작해서
  // 0초가 지난 후에 알람
  // 즉, 30초가 지난 후에 알람

  // 내가 설정한 시간을 보여줌
  const [startTime, setStartTime] = useState(0);

  // 보여줄 경과시간
  // const [elapsedTime, setElapsedTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => {
          if (prev >= 1) {
            if (selectedTodoId) {
              const updated = prev + 1;
              updateFetchTimeForTodo(selectedTodoId, updated);
            }
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setStartTime(0);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleRange = (e) => {
    setStartTime(Number(e.target.value));
  };

  const handleStart = () => {
    if (elapsedTime) {
      setIsRunning((prev) => !prev); // 일시정지 or 다시 시작
    } else if (startTime > 0) {
      // 타이머를 실행 상태로 변경.
      setIsRunning(true);
      // 타이머를 startTime 값부터 시작하도록 변경.
      setElapsedTime(startTime); // 처음 시작
      setStartTime(0);
    }
  };

  const handleReset = () => {
    setStartTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <p>
        {elapsedTime
          ? formatTime(elapsedTime, true)
          : formatTime(startTime, true)}
      </p>
      <button onClick={handleStart}>{!isRunning ? "시작" : "일시정지"}</button>
      <button onClick={handleReset}>리셋</button>
      <input
        type="range"
        min="0"
        max="3600"
        value={elapsedTime ? elapsedTime : startTime}
        step="30"
        onChange={handleRange}
      />
    </>
  );
};
export default Timer;
