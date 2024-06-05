/* eslint-disable no-case-declarations */
import { arrayMove } from "@dnd-kit/sortable";
import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteColumn, deleteTask, getTasks } from "../middlewares/taskMiddleware";

export const taskState = {
    status: "idle",
    tasks: {},
    activeId: null,
};

function setTasks(state, action) {
    const { data } = action.payload;
    const { tasks, columns } = data;
    state.tasks = {
        tasks: tasks.map((task) => {
            return { ...task, noEdit: true };
        }),
        columns: columns.map((column) => {
            return { ...column, noEdit: true };
        }),
    };
    state.status = "success";
}

export const taskSlice = createSlice({
    name: "task",
    initialState: taskState,
    reducers: {
        dragColumn: (state, action) => {
            const { activeIndex, overIndex } = action.payload;
            state.tasks.columns = arrayMove(state.tasks.columns, activeIndex, overIndex);
        },
        dragTask: (state, action) => {
            const { activeIndex, overIndex, columnOver, columnActive } = action.payload;
            if (columnOver !== columnActive) {
                state.tasks.tasks[activeIndex].column = columnOver;
            }
            if (activeIndex !== -1 && overIndex !== -1) {
                state.tasks.tasks = arrayMove(state.tasks.tasks, activeIndex, overIndex);
            }
        },
        addColumn: (state) => {
            state.tasks.columns.push({
                _id: Math.random().toString(36).substr(2, 9),
                column: Math.random().toString(36).substr(2, 9),
                columnName: `Column ` + (state.tasks.columns.length + 1),
                noEdit: true,
            });
        },
        addTask: (state, action) => {
            state.tasks.tasks.push({
                content: "New Task",
                column: action.payload.column,
                columnName: action.payload.columnName,
            });
        },
        changeNameColumn: (state, action) => {
            const findIndex = state.tasks.columns.findIndex((column) => column._id === action.payload.id);
            if (findIndex !== -1) {
                state.tasks.columns[findIndex].columnName = action.payload.value;
            }
        },
        changeEditColumn: (state, action) => {
            state.tasks.columns = state.tasks.columns.map((column) => {
                if (column._id === action.payload) {
                    return { ...column, noEdit: false };
                } else {
                    return { ...column, noEdit: true };
                }
            });
        },
        changeEditTask: (state, action) => {
            state.tasks.tasks = state.tasks.tasks.map((task) => {
                if (task._id === action.payload) {
                    return { ...task, noEdit: false };
                } else {
                    return { ...task, noEdit: true };
                }
            });
        },
        changeNameTask: (state, action) => {
            const findIndex = state.tasks.tasks.findIndex(({ _id }) => _id === action.payload.id);
            if (findIndex !== -1) {
                state.tasks.tasks[findIndex].content = action.payload.value;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.pending, (state) => {
            state.status = "pending";
            state.tasks = {};
        });
        builder.addCase(getTasks.rejected, (state) => {
            state.tasks = {};
            state.status = "failed";
            localStorage.removeItem("token");
        });
        // Cập nhật tasks
        // Thêm task
        // Xóa column
        //Update task
        builder.addCase(getTasks.fulfilled, setTasks);
        builder.addCase(addTask.fulfilled, setTasks);
        builder.addCase(deleteColumn.fulfilled, setTasks);
        builder.addCase(deleteTask.fulfilled, setTasks);
    },
});

export const { dragColumn, dragTask, changeNameColumn, changeEditTask, changeEditColumn, changeNameTask, addColumn } =
    taskSlice.actions;
