import { useState, useTransition, useEffect } from "react";

export default function Example5() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setItems((prev) => [...prev, ...data]));
  }, [page]);

  const loadMore = () => {
    startTransition(() => {
      setPage((prevPage) => prevPage + 1);
    });
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={loadMore} disabled={isPending}>
        {isPending ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
