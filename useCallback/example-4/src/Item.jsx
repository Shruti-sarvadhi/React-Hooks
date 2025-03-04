import React from 'react';

const Item = React.memo(({ id, onRemove }) => {
  console.log(`Item ${id} rendered`);
  return (
    <div>
      Item {id} <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
});

export default Item;