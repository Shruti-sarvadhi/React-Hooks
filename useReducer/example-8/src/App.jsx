import React, { useReducer } from 'react';

const initialState = { dragging: false, position: { x: 0, y: 0 } };

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...state, dragging: true };
    case 'move':
      return { ...state, position: { x: action.payload.x, y: action.payload.y } };
    case 'end':
      return { ...state, dragging: false };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMouseMove = (e) => {
    if (state.dragging) {
      dispatch({ type: 'move', payload: { x: e.clientX, y: e.clientY } });
    }
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div
        style={{ position: 'absolute', left: state.position.x, top: state.position.y, width: '100px', height: '100px', background: 'red' }}
        onMouseDown={() => dispatch({ type: 'start' })}
        onMouseUp={() => dispatch({ type: 'end' })}
      />
    </div>
  );
}

export default App;