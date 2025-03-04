// App.js
import React, { useState, useCallback } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = useCallback((text) => {
    setMessage(text);
  }, []);

  return (
    <div>
      <ul>
        {["Hello", "Welcome", "React"].map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default App;
