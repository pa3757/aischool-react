import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/CommnetSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
