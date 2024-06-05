import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authSlice";
import { userSlice } from "./reducers/userSlice";
import { taskSlice } from "./reducers/taskSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        task: taskSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActionPaths: ['payload.over.rect'],
        },
      }),
});