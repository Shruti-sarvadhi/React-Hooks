import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUsers } from "@/store/slices/user/userSlice";
import Card from "./Card";

function Example1() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user?.user);

  useEffect(() => {
    dispatch(fetchUsers()); //   Fetch users when component mounts
  }, [dispatch]);

  return (
    <>
      <h1>User Information</h1>
      {loading && <p>Loading...</p>} {/*   Show loading state */}
      {error && <p>Error: {error}</p>} {/*   Show error if API fails */}
      <ul>
        {users.length > 0 &&
          users?.map((person) => (
            <Card
              key={person.id}
              name={person.name}
              username={person.username}
              email={person.email}
              website={person.website}
            />
          ))}
      </ul>
    </>
  );
}

export default Example1;
