import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';

function Example10() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const transformedData = useMemo(() => {
    return numbers.map((num) => ({
      original: num,
      doubled: num * 2,
    }));
  }, [numbers]);

  return (
    <div>
      <h1>Data Transformer</h1>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Add Number
      </button>
      <DataTable data={transformedData} />
    </div>
  );
}

export default Example10;