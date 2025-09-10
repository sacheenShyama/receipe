import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncValue, setDebounceValue] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncValue;
};

export default useDebounce;
