import { useSyncExternalStore } from 'react';

// External store for localStorage
const createLocalStorageStore = (key, initialValue) => {
  const getState = () => {
    const value = localStorage.getItem(key);
    return value !== null ? value : initialValue; // Return raw value, not JSON
  };

  const setState = (newState) => {
    localStorage.setItem(key, newState); // Store raw value
    listeners.forEach((listener) => listener());
  };

  const listeners = new Set();
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};

const localStorageStore = createLocalStorageStore('theme', 'light');

function Example2() {
  const theme = useSyncExternalStore(localStorageStore.subscribe, localStorageStore.getState);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => localStorageStore.setState(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Example2;