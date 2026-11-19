import { useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {

  // Read the saved value when the hook initializes
  const [value, setValueState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null
        ? (JSON.parse(storedValue) as T)
        : initialValue;

    } catch {
      return initialValue;
    }
  });

  // Update React state and Local Storage
  function setValue(newValue: T) {
    setValueState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  // Remove the saved value
  function removeValue() {
    localStorage.removeItem(key);
    setValueState(initialValue);
  }

  return [value, setValue, removeValue];
}