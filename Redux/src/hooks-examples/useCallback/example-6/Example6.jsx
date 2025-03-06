import React, { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showNotification, clearNotification } from "@/store/slices/app/notificationSlice";

function Example6() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.app.notifications);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSubmittedName(name);
      setName("");

      // Show success notification
      dispatch(showNotification({ message: `Name "${name}" submitted!`, type: "success" }));

      // Auto-clear notification after 3 seconds
      setTimeout(() => {
        dispatch(clearNotification());
      }, 3000);
    },
    [name, dispatch]
  );

  return (
    <div>
      {/* Display Notification */}
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

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Name */}
      <p>Submitted Name: {submittedName}</p>
    </div>
  );
}

export default Example6;
