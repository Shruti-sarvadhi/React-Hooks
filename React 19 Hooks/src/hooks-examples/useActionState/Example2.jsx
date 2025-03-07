import { useEffect, useState } from "react";
import { useActionState } from "react";

async function updateProfile(prevState, newProfile) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${prevState.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfile),
    });

    if (!response.ok) throw new Error("Update failed");

    return { ...prevState, ...newProfile, error: null };
  } catch {
    return { ...prevState, error: "Failed to update profile" };
  }
}

export default function Example2({ userId=1 }) {
  const [profile, setProfile] = useState(null);
  const [state, update, isPending] = useActionState(updateProfile, { id: userId, name: "", email: "", error: null });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then(setProfile);
  }, [userId]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h3>Profile</h3>
      <p>Name: {state.name || profile.name}</p>
      <p>Email: {state.email || profile.email}</p>
      <button onClick={() => update({ name: "Updated Name" ,email:"changed@email.com"})} disabled={isPending}>
        {isPending ? "Updating..." : "Change Name"}
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
