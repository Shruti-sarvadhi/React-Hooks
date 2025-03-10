import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  enabled: boolean;
}

const initialState: NotificationState = {
  enabled: true,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

export const { toggleNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
