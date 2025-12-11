export function selectVisibleTasks(state) {
    const { byId, allIds, filter = "all" } = state.tasks;

    const tasks = allIds.map((id) => byId[id] || null).filter(Boolean);

    if (filter === "active") {
        return tasks.filter((t) => !t.completed);
    }
    if (filter === "completed") {
        return tasks.filter((t) => t.completed);
    }
    return tasks;
}
