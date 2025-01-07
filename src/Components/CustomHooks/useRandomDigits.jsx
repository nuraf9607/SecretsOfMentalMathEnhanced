import { useState, useEffect } from "react";

export const useRandomDigits = (digit, key) => {
  const [xDigit, setXDigit] = useState(null);
  const [yDigit, setYDigit] = useState(null);

  const genMinMaxDigits = (digit) => {
    const min = Math.pow(10, digit - 1);
    const max = Math.pow(10, digit) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    setXDigit(genMinMaxDigits(digit));
    setYDigit(genMinMaxDigits(digit));
  }, [digit, key]);

  return [xDigit, yDigit];
};
