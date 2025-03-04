import { useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Manipulate the DOM directly using the ref
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <label htmlFor="comment">Any comment?</label>
      <br />
      {/* Attaching the ref to an input element */}
      <textarea ref={inputRef} name="comment" rows={4} cols={20}></textarea>
    </div>
  );
}