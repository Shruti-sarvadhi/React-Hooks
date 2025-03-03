import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

//Fetching new data when a prop changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [userId]); 

  return (
    <div>
      <h2>User Profile</h2>
      {user ? <p>Name: {user.name}</p> : <p>Loading...</p>}
    </div>
  );
};

export default UserProfile;
