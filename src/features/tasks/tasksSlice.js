import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    byId: {},
    allIds: [],
    filter: "all",
    searchQuery: "",
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
            prepare({ title, priority = "low" }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                        priority, // 'low' | 'medium' | 'high' | 'urgent'
                        createdAt: new Date().toISOString(),
                        updatedAt: null,
                        categories: [],
                    },
                };
            },
        },

        toggleTask(state, action) {
            const id = action.payload;
            const t = state.byId[id];
            if (t) {
                t.completed = !t.completed;
                t.updatedAt = new Date().toISOString();
            }
        },

        deleteTask(state, action) {
            const id = action.payload;
            delete state.byId[id];
            state.allIds = state.allIds.filter((i) => i !== id);
        },

        updatePriority(state, action) {
            const { id, priority } = action.payload;
            const t = state.byId[id];
            if (t) {
                t.priority = priority;
                t.updatedAt = new Date().toISOString();
            }
        },

        setFilter(state, action) {
            state.filter = action.payload;
        },

        setSearch(state, action) {
            state.searchQuery = action.payload;
        },

        loadTasks(state, action) {
            return action.payload;
        },
    },
});

export const {
    addTask,
    toggleTask,
    deleteTask,
    updatePriority,
    setFilter,
    loadTasks,
    setSearch,
} = tasksSlice.actions;
export default tasksSlice.reducer;
