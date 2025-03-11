export { store, persistor } from "./store";
export { useAppDispatch, useAppSelector } from "./hooks";

// User Feature
export { loginUser, logoutUser as logoutAuth } from "./slices/user/authSlice";
export { fetchUsers, addUser, updateUser, deleteUser } from "./slices/user/userSlice";

export {fetchPosts, addPost, modifyPost as updatePost,removePost as deletePost} from "./slices/post/postSlice";

// Settings Feature
export { setTheme } from "./slices/settings/themeSlice";
export { toggleNotifications } from "./slices/settings/notificationsSlice";
