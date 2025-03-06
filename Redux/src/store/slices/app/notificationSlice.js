import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [], // Array of notifications
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload); // Add a new notification
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload); // Remove by ID
    },
    clearNotifications: (state) => {
      state.notifications = []; // Clear all notifications
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
