// src/hooks/useLocalStorage.ts
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch  {
      alert('Error loading data from localStorage');
      return initialValue;
    }
  });

  const setValue = (value: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch  {
        alert('Error saving data to localStorage');
    }
  };

  return [storedValue, setValue] as const;
}
