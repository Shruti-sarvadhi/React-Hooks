import { useEffect, Suspense, lazy, useInsertionEffect, useCallback, useDeferredValue } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  fetchUsers,
  updateUser,
  deleteUser,
  selectUsers,
  selectUserLoading,
  selectUserError,
} from "@/store/slices/user/userSlice";
import { User } from "@/types/types";
import {Spinner as LoadingSpinner} from "@/components"; // Placeholder spinner
const UserCard = lazy(() => import("@/components/UserCard"));

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectUserLoading);
  const error = useAppSelector(selectUserError);

  // Smooth rendering using useDeferredValue
  const deferredUsers = useDeferredValue(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // useInsertionEffect: Inject styles before DOM mutations
  useInsertionEffect(() => {
    document.body.style.backgroundColor = "#f9fafb"; // Light gray bg
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);

  // Memoized functions for optimized renders
  const handleEdit = useCallback(
    async (updatedUser: User, imageFile?: File) => {
      if (imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => {
          dispatch(updateUser({ id: updatedUser.id, user: { ...updatedUser, profileImage: reader.result as string } }));
        };
        reader.onerror = () => alert("Error converting image.");
      } else {
        dispatch(updateUser({ id: updatedUser.id, user: updatedUser }));
      }
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteUser(id));
    },
    [dispatch]
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>

      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deferredUsers.length > 0 ? (
          deferredUsers.map((user) => (
            <Suspense key={user.id} fallback={<div className="h-32 w-full bg-gray-200 animate-pulse rounded-md" />}>
              <UserCard user={user} onEdit={handleEdit} onDelete={handleDelete} />
            </Suspense>
          ))
        ) : (
          !loading && <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
