export function selectVisibleTasks(state) {
    const { byId, allIds, filter = "all", searchQuery = "" } = state.tasks;

    const q = (searchQuery || "").trim().toLowerCase();

    let tasks = allIds.map((id) => byId[id]).filter(Boolean);

    if (filter === "active") {
        tasks = tasks.filter((t) => !t.completed);
    } else if (filter === "completed") {
        tasks = tasks.filter((t) => t.completed);
    }

    if (q.length > 0) {
        tasks = tasks.filter((t) => (t.title || "").toLowerCase().includes(q));
    }

    return tasks;
}
