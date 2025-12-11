export function selectVisibleTasks(state) {
    const {
        byId,
        allIds,
        filter = "all",
        searchQuery = "",
        categoryFilter = "all",
    } = state.tasks;

    const q = (searchQuery || "").trim().toLowerCase();

    let tasks = allIds.map((id) => byId[id]).filter(Boolean);

    if (filter === "active") {
        tasks = tasks.filter((t) => !t.completed);
    } else if (filter === "completed") {
        tasks = tasks.filter((t) => t.completed);
    }

    if (categoryFilter && categoryFilter !== "all") {
        tasks = tasks.filter(
            (t) =>
                (t.category || t.categories?.[0] || "inbox") === categoryFilter
        );
    }

    if (q.length > 0) {
        tasks = tasks.filter((t) => (t.title || "").toLowerCase().includes(q));
    }

    return tasks;
}
