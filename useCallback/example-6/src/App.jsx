import React, { useState, useCallback } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSubmittedName(name);
      setName('');
    },
    [name]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Name: {submittedName}</p>
    </div>
  );
}

export default App;