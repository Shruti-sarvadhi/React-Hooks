import { useRef } from "react";
import Modal from "./child/Modal";

export default function Example2() {
  const modalRef = useRef();

  return (
    <div className="text-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => modalRef.current.open()}
      >
        Open Modal
      </button>

      <Modal ref={modalRef} />
    </div>
  );
}
