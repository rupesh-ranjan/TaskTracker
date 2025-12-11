import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    byId: {},
    allIds: [],
    filter: "all",
    searchQuery: "",
    categoryFilter: "all",
    priorityFilter: "all",
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

        updateTask(state, action) {
            const { id, title, priority, category } = action.payload;
            const t = state.byId[id];
            if (t) {
                if (typeof title === "string") t.title = title;
                if (typeof priority === "string") t.priority = priority;
                if (typeof category === "string") {
                    t.category = category;
                    t.categories = [category];
                }
                t.updatedAt = new Date().toISOString();
            }
        },

        setFilter(state, action) {
            state.filter = action.payload;
        },

        setPriorityFilter(state, action) {
            state.priorityFilter = action.payload;
        },

        setSearch(state, action) {
            state.searchQuery = action.payload;
        },

        setCategoryFilter(state, action) {
            state.categoryFilter = action.payload;
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
    setFilter,
    loadTasks,
    setSearch,
    setCategoryFilter,
    updateTask,
    setPriorityFilter,
} = tasksSlice.actions;

export default tasksSlice.reducer;
