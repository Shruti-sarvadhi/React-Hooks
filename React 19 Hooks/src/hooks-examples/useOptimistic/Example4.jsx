import { useState, useEffect, useOptimistic, startTransition } from "react";

async function updateUserProfile(userId, newProfile) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProfile),
  });

  return response.ok ? newProfile : null;
}

export default function Example4({ userId=1 }) {
  const [profile, setProfile] = useState(null);
  const [optimisticProfile, updateOptimisticProfile] = useOptimistic(profile, (_, newProfile) => newProfile);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then(setProfile);
  }, [userId]);

  const handleUpdate = async () => {
    const updatedProfile = { ...optimisticProfile, name: "Updated Name" };

    startTransition(() => {
      updateOptimisticProfile(updatedProfile); // Ensuring smooth UI update
    });

    setIsUpdating(true);
    const confirmedProfile = await updateUserProfile(userId, updatedProfile);
    setIsUpdating(false);

    if (confirmedProfile) {
      setProfile(confirmedProfile);
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="p-4 border rounded shadow-md">
      <h3>Profile</h3>
      <p>Name: {optimisticProfile?.name || profile.name}</p>
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white p-2 rounded"
        disabled={isUpdating}
      >
        {isUpdating ? "Updating..." : "Update Name"}
      </button>
    </div>
  );
}
