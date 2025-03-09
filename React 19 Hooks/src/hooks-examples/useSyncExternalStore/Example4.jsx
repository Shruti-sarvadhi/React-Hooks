import { useSyncExternalStore } from 'react';

// External store for geolocation
const createGeolocationStore = () => {
  let position = null;
  const listeners = new Set();

  const getState = () => position;

  const subscribe = (listener) => {
    listeners.add(listener);

    // Start tracking position
    const watchId = navigator.geolocation.watchPosition(
      (newPosition) => {
        position = newPosition;
        listeners.forEach((listener) => listener());
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      listeners.delete(listener);
    };
  };

  return { getState, subscribe };
};

const geolocationStore = createGeolocationStore();

function Example4() {
  const position = useSyncExternalStore(geolocationStore.subscribe, geolocationStore.getState);

  return (
    <div>
      <p>Latitude: {position?.coords.latitude}</p>
      <p>Longitude: {position?.coords.longitude}</p>
    </div>
  );
}

export default Example4;