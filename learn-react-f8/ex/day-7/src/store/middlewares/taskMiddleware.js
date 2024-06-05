import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../http/http";
import { setIsAuthenticated } from "../reducers/authSlice";

export const getTasks = createAsyncThunk("task/getTasks", async (_, { rejectWithValue, dispatch }) => {
    try {
        const token = localStorage.getItem("token");
        const { response, result } = await http.get("/tasks", {
            "X-Api-Key": token,
        });
        if (!response.ok) {
            throw new Error("Không lấy được dữ liệu");
        }
        return result;
    } catch (e) {
        dispatch(setIsAuthenticated(false));
        return rejectWithValue(e.message);
    }
});

export const addTask = createAsyncThunk("task/addTask", async (data, { getState }) => {
    // try {
        const state = getState();
        const { columns, tasks } = state.task.tasks;
    // Nếu bị lỗi phải đóng dòng này lại thì mới thêm được cột mới
    const dataNew = tasks.map((task) => {
        return {
            content: task.content,
            column: task.column,
            columnName: columns.find((column) => column.column === task.column).columnName,
        };
    });
    
    dataNew.push({
        content: "new",
        column: data.column,
        columnName: data.columnName,
    });
    
    const token = localStorage.getItem("token");
    const { response, result } = await http.post("/tasks", dataNew, {
        "X-Api-Key": token,
    });

    if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
    }
    return result;
    // } catch (e) {
    //     return rejectWithValue(e.message);
    // }
});

export const deleteColumn = createAsyncThunk("task/deleteColumn", async (data, { getState }) => {
    const state = getState();
    const { columns, tasks } = state.task.tasks;
    const dataNew = tasks
        .filter((task) => {
            return task.column !== data.column;
        })
        .map((task) => {
            return {
                content: task.content,
                column: task.column,
                columnName: columns.find((column) => column.column === task.column).columnName,
            };
        });
    const token = localStorage.getItem("token");
    const { response, result } = await http.post("/tasks", dataNew, {
        "X-Api-Key": token,
    });

    if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
    }
    return result;
});

export const deleteTask = createAsyncThunk("task/deleteTask", async (data, { getState }) => {
    const state = getState();
    const { columns, tasks } = state.task.tasks;
    const dataTasks = tasks
    .filter((task) => {
            return task._id !== data._id;
        })
        .map((task) => {
            return {
                content: task.content,
                column: task.column,
                columnName: columns.find((column) => column.column === task.column).columnName,
            };
        });
    const token = localStorage.getItem("token");
    const { response, result } = await http.post("/tasks", dataTasks, {
        "X-Api-Key": token,
    });

    if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
    }

    return result;
});

export const updateTask = createAsyncThunk("task/updateTask", async (data, { getState }) => {
    const state = getState();
    const { tasks, columns } = state.task.tasks;
    const dataTasks = tasks.map((task) => {
        let content = task.content;
        if (task._id === data.id) {
            content = data.value;
        }
        return {
            content,
            column: task.column,
            columnName: columns.find((column) => column.column === task.column).columnName,
        };
    });

    const token = localStorage.getItem("token");
    const { response, result } = await http.post("/tasks", dataTasks, {
        "X-Api-Key": token,
    });

    if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
    }
    result.idEdit = data.id;
    return result;
});
