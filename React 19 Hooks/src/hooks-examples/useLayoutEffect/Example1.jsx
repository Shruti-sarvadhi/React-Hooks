import { useLayoutEffect, useRef } from "react";

export default function Example1() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused input" />;
}
