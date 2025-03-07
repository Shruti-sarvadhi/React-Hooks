import { useState, useDeferredValue, useEffect } from "react";

export default function Example5() {
  const [messages, setMessages] = useState([]);
  const deferredMessages = useDeferredValue(messages);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, `New message ${prev.length + 1}`]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Live Chat</h3>
      <ul>
        {deferredMessages.slice(-10)?.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
