import { useState, useTransition } from "react";

export default function Example3() {
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const itemsPerPage = 10;
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const handlePageChange = (newPage) => {
    startTransition(() => {
      setPage(newPage);
    });
  };

  return (
    <div>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === 10}>Next</button>
      {isPending && <p>Loading...</p>}
      <ul>
        {items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
