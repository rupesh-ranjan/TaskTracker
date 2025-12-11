import { useDispatch } from "react-redux";
import {
    toggleTask,
    deleteTask,
    updatePriority,
} from "../features/tasks/tasksSlice.js";
import PriorityBadge from "./PriorityBadge.jsx";
import { PRIORITIES } from "../constants/index.js";

export default function TaskItem({ task }) {
    const dispatch = useDispatch();

    return (
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
                    </div>

                    <div className="text-xs text-gray-500 mt-0.5">
                        {new Date(task.createdAt).toLocaleString()}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <select
                    value={task.priority}
                    onChange={(e) =>
                        dispatch(
                            updatePriority({
                                id: task.id,
                                priority: e.target.value,
                            })
                        )
                    }
                    className="text-sm border rounded px-2 py-1 bg-white"
                >
                    {PRIORITIES.map((p) => (
                        <option key={p.value} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>

                <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="text-red-500 text-sm"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
