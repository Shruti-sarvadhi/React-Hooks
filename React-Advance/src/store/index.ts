export { store, persistor } from "./store";
export { useAppDispatch, useAppSelector } from "./hooks";

// User Feature
export { setUser, logout as logoutUser } from "./slices/user/userSlice";
export { login, logout as logoutAuth } from "./slices/user/authSlice";

// Settings Feature
export { setTheme } from "./slices/settings/themeSlice";
export { toggleNotifications } from "./slices/settings/notificationsSlice";
