import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/tasks/tasksSlice.js";
import PriorityBadge from "./PriorityBadge.jsx";
import { CATEGORIES, CATEGORY_STYLES } from "../constants/index.js";
import EditTaskModal from "./EditTaskModal.jsx";

export default function TaskItem({ task }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const catMeta = CATEGORY_STYLES[task.category] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
    };
    const catLabel = (
        CATEGORIES.find((c) => c.value === task.category) || {
            label: "Personal",
        }
    ).label;

    return (
        <>
            <li className="flex items-center justify-between bg-white shadow px-4 py-2 rounded">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTask(task.id))}
                    />

                    <div>
                        <div className="flex items-center gap-2">
                            <span
                                className={
                                    task.completed
                                        ? "line-through text-gray-400"
                                        : "font-medium"
                                }
                            >
                                {task.title}
                            </span>

                            <PriorityBadge priority={task.priority} />

                            <span
                                className={`px-2 py-0.5 text-xs rounded-full ${catMeta.bg} ${catMeta.text}`}
                            >
                                {catLabel}
                            </span>
                        </div>

                        <div className="text-xs text-gray-500 mt-0.5">
                            {new Date(task.createdAt).toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setOpen(true)}
                        className="text-gray-700 text-lg px-2 py-1"
                    >
                        ✏️
                    </button>

                    <button
                        onClick={() => dispatch(deleteTask(task.id))}
                        className="text-red-600 text-lg px-2 py-1"
                    >
                        🗑️
                    </button>
                </div>
            </li>

            {open && (
                <EditTaskModal task={task} onClose={() => setOpen(false)} />
            )}
        </>
    );
}
