import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice.js";
import { PRIORITIES, CATEGORIES } from "../constants/index.js";

export default function AddTask() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("low");
    const [category, setCategory] = useState("personal");

    const handleAdd = () => {
        const t = title.trim();
        if (!t) return;
        dispatch(addTask({ title: t, priority, category }));
        setTitle("");
    };

    return (
        <div className="mb-4">
            {/* Row 1: full-width input */}
            <div className="mb-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task..."
                    className="input"
                    aria-label="Task title"
                />
            </div>

            {/* Row 2: priority, category, add button */}
            <div className="flex gap-2 items-center">
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="select flex-1"
                    aria-label="Priority"
                >
                    {PRIORITIES.map((p) => (
                        <option key={p.value} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select flex-1"
                    aria-label="Category"
                >
                    {CATEGORIES.map((c) => (
                        <option key={c.value} value={c.value}>
                            {c.label}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleAdd}
                    className="btn-primary"
                    aria-label="Add task"
                >
                    Add
                </button>
            </div>
        </div>
    );
}
