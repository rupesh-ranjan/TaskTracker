import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    byId: {},
    allIds: [],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                const task = action.payload;
                state.byId[task.id] = task;
                state.allIds.push(task.id);
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                        createdAt: new Date().toISOString(),
                    },
                };
            },
        },

        toggleTask(state, action) {
            const id = action.payload;
            state.byId[id].completed = !state.byId[id].completed;
        },

        deleteTask(state, action) {
            const id = action.payload;
            delete state.byId[id];
            state.allIds = state.allIds.filter((i) => i !== id);
        },
    },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
