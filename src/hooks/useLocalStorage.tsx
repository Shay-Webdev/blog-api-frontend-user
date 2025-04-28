import { useEffect, useState } from "react";
import { setLocalItem, getLocalItem } from "../utilities/localStorage";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const item = getLocalItem(key);
    return (item as T) || initialValue;
  });
  useEffect(() => {
    setLocalItem(key, value);
  }, [value]);
  return [value, setValue] as const;
}

export { useLocalStorage };
