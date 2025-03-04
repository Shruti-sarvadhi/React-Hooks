import React, { useState, useCallback } from 'react';

function App() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = useCallback(
    debounce((value) => setDisplayText(value), 500),
    []
  );

  const onChange = (e) => {
    setText(e.target.value);
    handleInputChange(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>Displayed Text: {displayText}</p>
    </div>
  );
}

export default App;