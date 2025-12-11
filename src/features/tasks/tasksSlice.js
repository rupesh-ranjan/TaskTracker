import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    byId: {},
    allIds: [],
    filter: "all",
    searchQuery: "",
    categoryFilter: "all",
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
            prepare({ title, priority = "low", category = "personal" }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                        priority,
                        category,
                        createdAt: new Date().toISOString(),
                        updatedAt: null,
                        categories: [category],
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

        setCategoryFilter(state, action) {
            state.categoryFilter = action.payload;
        },

        updateCategory(state, action) {
            const { id, category } = action.payload;
            const t = state.byId[id];
            if (t) {
                t.category = category;
                t.categories = [category];
                t.updatedAt = new Date().toISOString();
            }
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
    updateCategory,
    setCategoryFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
