import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUsers } from "@/store/slices/user/userSlice";
import UserList from "./UserList";

function Example6() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user?.user);

  useEffect(() => {
    dispatch(fetchUsers()); //   Fetch users when component mounts
  }, [dispatch]);

  //   Memoized user processing
  const processedUsers = useMemo(() => {
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }, [users]);

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>} {/*   Show loading state */}
      {error && <p>Error: {error}</p>} {/*   Show error if API fails */}
      <UserList users={processedUsers} />
    </div>
  );
}

export default Example6;
