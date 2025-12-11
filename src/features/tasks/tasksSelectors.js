export function selectVisibleTasks(state) {
    const {
        byId,
        allIds,
        filter = "all",
        searchQuery = "",
        categoryFilter = "all",
        priorityFilter = "all",
    } = state.tasks;

    const q = (searchQuery || "").trim().toLowerCase();

    let tasks = allIds.map((id) => byId[id]).filter(Boolean);

    if (filter === "active") {
        tasks = tasks.filter((t) => !t.completed);
    } else if (filter === "completed") {
        tasks = tasks.filter((t) => t.completed);
    }

    if (priorityFilter && priorityFilter !== "all") {
        const pf = String(priorityFilter).trim().toLowerCase();
        tasks = tasks.filter(
            (t) =>
                String(t.priority || "")
                    .trim()
                    .toLowerCase() === pf
        );
    }

    if (categoryFilter && categoryFilter !== "all") {
        const cf = String(categoryFilter).trim().toLowerCase();
        tasks = tasks.filter((t) => {
            const cat = String(
                t.category || (t.categories && t.categories[0]) || ""
            )
                .trim()
                .toLowerCase();
            return cat === cf;
        });
    }

    if (q.length > 0) {
        tasks = tasks.filter((t) => (t.title || "").toLowerCase().includes(q));
    }

    return tasks;
}
