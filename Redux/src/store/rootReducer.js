import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./slices/app";
import userReducer from './slices/user'
import featuresReducer from "./slices/features";

/**
 * Root reducer that combines all app, user, and feature reducers.
 */
const rootReducer = combineReducers({
  app: appReducer,        // Contains theme, language, notifications, settings
  user: userReducer,      // Contains auth, user profile, cart
  features: featuresReducer, // Contains todos, counter, chat
});

export default rootReducer;
