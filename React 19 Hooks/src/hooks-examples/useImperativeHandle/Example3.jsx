import { useRef } from "react";
import CollapsiblePanel from "./child/CollapsiblePanel";

export default function Example3() {
  const panelRef = useRef();

  return (
    <div>
      <CollapsiblePanel ref={panelRef} />
      <button onClick={() => panelRef.current.open()}>Open Panel</button>
      <button onClick={() => panelRef.current.close()}>Close Panel</button>
      <button onClick={() => panelRef.current.toggle()}>Toggle Panel</button>
    </div>
  );
}
