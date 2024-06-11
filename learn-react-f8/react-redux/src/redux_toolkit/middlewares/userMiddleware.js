import { createAsyncThunk } from "@reduxjs/toolkit";
// import { setStatus, setUsers } from "../slice/userSlice";
// Cách cũ
// export const getUsers = () => {
//     const userApi = "https://api.escuelajs.co/api/v1/users";
//     return async (dispatch) => {
//         dispatch(setStatus("pending"));
//         const response = await fetch(userApi);
//         if(!response.ok) {
//             dispatch(setStatus("failed"));
//             return;
//         }
//         const data = await response.json();
//         dispatch(setUsers(data));
//         dispatch(setStatus("success"));
//     };
// };

export const getUsers = createAsyncThunk("user/getUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER_API + "/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

export const getUser = createAsyncThunk("user/getUser", async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER_API + "/users/" + id);
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

/*
Tồn tại:
- idle
- pending
- success
- failed
*/
