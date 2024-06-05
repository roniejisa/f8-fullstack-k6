import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../http/http";

export const getToken = createAsyncThunk("auth/getToken", async (email, { rejectWithValue }) => {
    try {
        const { response, result } = await http.get(`/api-key?email=${email}`);
        if (!response.ok) {
            throw new Error("Xảy ra lỗi");
        }
        return result;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});
