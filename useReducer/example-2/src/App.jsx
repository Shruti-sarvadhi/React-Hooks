// App.js
import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  age: ''
};

function reducer(state, action) {
  const {type,field,value}=action
  switch (type) {
    case 'UPDATE_FIELD':
      return { ...state, [field]: value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div>
      <form>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="age"
          value={state.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;