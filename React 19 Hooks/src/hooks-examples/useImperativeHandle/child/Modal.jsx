import { useState, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-bold">Modal</h2>
        <p>This is a modal dialog controlled by the parent.</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
});

export default Modal;
