import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showNotification, clearNotification } from "@/store/slices/app/notificationSlice";

function Example4() {
  const TextRef = useRef("");
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.app.notifications);

  const handleCopy = () => {
    if (TextRef.current) {
      navigator.clipboard.writeText(TextRef.current.value);

      // ✅ Show notification instead of alert
      dispatch(showNotification({ message: "Text copied to clipboard!", type: "success" }));

      // ✅ Auto-clear notification after 3 seconds
      setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);
    }
  };

  return (
    <>
      {/* ✅ Show Notification */}
      {notification.message && (
        <div
          style={{
            padding: "10px",
            background: notification.type === "success" ? "green" : "red",
            color: "white",
            marginBottom: "10px",
          }}
        >
          {notification.message}
        </div>
      )}

      <input type="text" ref={TextRef} defaultValue="copy me" />
      <button onClick={handleCopy}>Copy</button>
    </>
  );
}

export default Example4;
