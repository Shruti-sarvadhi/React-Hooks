import "@/App.css";
import UserForm from "./pages/UserForm";
import UserFormFormik from "./pages/UserFormFormik";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  fetchUsers,
  selectUsers,
  selectUserLoading,
  selectUserError,
} from "@/store/slices/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectUserLoading);
  const error = useAppSelector(selectUserError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <UserForm />
      <UserFormFormik />

      <h2 className="mt-6 text-lg font-semibold">Users List</h2>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="mt-2 border rounded p-4 bg-white">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b py-2">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.password}</p>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
