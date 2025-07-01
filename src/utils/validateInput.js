
export const validateInput = (value) => {

  const isNumeric = /^\d{1,2}$/.test(value);

  // Convert to number and check if within 0–59
  const number = parseInt(value, 10);
  const isValidRange = !isNaN(number) && number >= 0 && number <= 59;

  return isNumeric && isValidRange;
};
