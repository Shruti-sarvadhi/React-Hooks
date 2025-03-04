import React, { useState, useMemo } from 'react';
import SortedList from './SortedList';

function App() {
  const [items,setitems] = useState(['Banana', 'Apple', 'Cherry']);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) =>
      sortAsc ? a.localeCompare(b) : b.localeCompare(a)
    );
  }, [items, sortAsc]);

  return (
    <div>
      <h1>Sortable List</h1>
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort {sortAsc ? 'Descending' : 'Ascending'}
      </button>
      <SortedList items={sortedItems} />
    </div>
  );
}

export default App;