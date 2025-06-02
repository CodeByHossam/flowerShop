import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const getValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.warn(`useLocalStorage: Error reading "${key}"`, e);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getValue);

  const updateValue = (newValue) => {
    try {
      const val = newValue instanceof Function ? newValue(value) : newValue;
      setValue(val);
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn(`useLocalStorage: Error setting "${key}"`, e);
    }
  };

  useEffect(() => {
    setValue(getValue());
  }, []);

  useEffect(() => {
    const sync = () => setValue(getValue());
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return [value, updateValue];
}

export default useLocalStorage;
