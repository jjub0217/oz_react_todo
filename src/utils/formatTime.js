export const formatTime = (totalSeconds) => {
  const elapsedHours = Math.floor(totalSeconds / 3600);
  const elapsedMinutes = Math.floor((totalSeconds % 3600) / 60);
  const elapsedSeconds = totalSeconds % 60;

  const timeString = `${String(elapsedHours).padStart(2, "0")}: ${String(
    elapsedMinutes
  ).padStart(2, "0")}: ${String(elapsedSeconds).padStart(2, "0")}`;
  return timeString;
};
