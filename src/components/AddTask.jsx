import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice.js";
import { PRIORITIES } from "../constants/index.js";

export default function AddTask() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("low");

    const handleAdd = () => {
        if (!title.trim()) return;
        dispatch(addTask({ title, priority }));
        setTitle("");
    };

    return (
        <div className="flex gap-2 mb-4 items-center">
            <input
                type="text"
                placeholder="Enter task..."
                className="border px-3 py-2 rounded w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border px-2 py-2 rounded bg-white"
            >
                {PRIORITIES.map((p) => (
                    <option key={p.value} value={p.value}>
                        {p.label}
                    </option>
                ))}
            </select>

            <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </div>
    );
}
