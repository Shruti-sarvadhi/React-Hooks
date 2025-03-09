import { useSyncExternalStore } from 'react';

// External store for scroll position
const createScrollStore = () => {
  let scrollY = window.scrollY; // Initial scroll position
  const listeners = new Set();

  const getState = () => scrollY;

  const handleScroll = () => {
    scrollY = window.scrollY;
    listeners.forEach((listener) => listener());
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  // Cleanup scroll event listener
  const cleanup = () => {
    window.removeEventListener('scroll', handleScroll);
  };

  return { getState, subscribe, cleanup };
};

const scrollStore = createScrollStore();

function Example3() {
  const scrollY = useSyncExternalStore(scrollStore.subscribe, scrollStore.getState);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <p>Current Scroll Position: {scrollY}px</p>
      <p>Scroll down to see the position update in real-time.</p>
    </div>
  );
}

export default Example3;