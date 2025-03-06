import React, { useState, useMemo } from 'react';
import TotalDisplay from './TotalDisplay';

function Example9() {
  const [price, setPrice] = useState(10);
  const [quantity, setQuantity] = useState(2);

  const total = useMemo(() => price * quantity, [price, quantity]);

  return (
    <div>
      <h1>Price Calculator</h1>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <TotalDisplay total={total} />
    </div>
  );
}

export default Example9;