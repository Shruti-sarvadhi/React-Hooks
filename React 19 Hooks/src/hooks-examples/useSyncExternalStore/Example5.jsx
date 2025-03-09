import { useSyncExternalStore } from 'react';

// External store for custom events
const createEventStore = () => {
  let eventData = null;
  const listeners = new Set();

  const getState = () => eventData;

  const setState = (data) => {
    eventData = data;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};

const eventStore = createEventStore();

// Simulate an event
setTimeout(() => {
  eventStore.setState({ type: 'customEvent', payload: 'Hello World' });
}, 3000);

function Example5() {
  const event = useSyncExternalStore(eventStore.subscribe, eventStore.getState);

  return (
    <div>
      <p>Event Data: {event ? JSON.stringify(event) : 'No event yet'}</p>
    </div>
  );
}

export default Example5