import { createSlice } from "@reduxjs/toolkit";

const getCookie = (name) => {
    if (typeof document === "undefined") return;
    if (document.cookie === "") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    else return null;
};
export const configSlice = createSlice({
    name: "config",
    initialState: {
        theme: getCookie("theme") || "light",
        menu: true,
        search: false,
        modalLogin: false,
        user: null,
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setMenu: (state, action) => {
            state.menu = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setModalLogin: (state, action) => {
            state.modalLogin = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});
