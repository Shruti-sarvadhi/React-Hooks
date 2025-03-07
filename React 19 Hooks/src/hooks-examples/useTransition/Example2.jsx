import { useState, useTransition } from "react";

export default function Example2() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newTab) => {
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div>
      <button onClick={() => handleTabChange("home")}>Home</button>
      <button onClick={() => handleTabChange("profile")}>Profile</button>
      {isPending && <p>Loading...</p>}
      <div>
        {tab === "home" && <p>🏠 Home Content</p>}
        {tab === "profile" && <p>👤 Profile Content</p>}
      </div>
    </div>
  );
}
