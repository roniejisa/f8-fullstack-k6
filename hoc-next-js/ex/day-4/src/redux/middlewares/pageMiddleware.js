import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPage = createAsyncThunk("page/fetchPage", async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + "/pages");
    const data = await response.json();
    return data;
});