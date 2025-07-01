

export const calculateTime = (hours, minutes, seconds) => {
  const h = parseInt(hours, 10);
  const m = parseInt(minutes, 10);
  const s = parseInt(seconds, 10);

  const totalSeconds = h * 3600 + m * 60 + s;

  return isNaN(totalSeconds) ? 0 : totalSeconds;
};
