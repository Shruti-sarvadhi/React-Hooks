import React, { useState, useCallback } from 'react';
import Item from './Item';

function Example4() {
  const [items, setItems] = useState([1, 2, 3,4,5,6,7,8,9,10]);

  const removeItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item !== id));
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      {items.map((item) => (
        <Item key={item} id={item} onRemove={removeItem} />
      ))}
    </div>
  );
}

export default Example4;