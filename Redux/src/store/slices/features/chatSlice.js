import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [], // Stores chat messages
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload); // Add new message
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(msg => msg.id !== action.payload); // Remove by ID
    },
    clearChat: (state) => {
      state.messages = []; // Clear all messages
    },
  },
});

export const { sendMessage, deleteMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
