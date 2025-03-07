import { useState, useImperativeHandle, forwardRef } from "react";

const CollapsiblePanel = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>Toggle</button>
      {isOpen && <p>This is a collapsible panel.</p>}
    </div>
  );
});

export default CollapsiblePanel;
