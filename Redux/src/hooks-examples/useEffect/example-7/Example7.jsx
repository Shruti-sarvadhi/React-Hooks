import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateUser, clearUser } from "@/store/slices/user/userSlice";

function Example7() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user?.user?.users); // ✅ Get users from Redux Persist
 
  
  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch(updateUser(name )); // ✅ Add user to Redux state
    setName(""); // ✅ Clear input field
  };

  const handleClear = () => {
    dispatch(clearUser()); // ✅ Clears all users
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <button onClick={handleClear}>Clear Users</button> {/* ✅ Clear button */}

      <p>Saved Users</p>
      <ul>
        {users?.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Example7;
