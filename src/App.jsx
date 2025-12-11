import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
    addTask,
    toggleTask,
    deleteTask,
} from "./features/tasks/tasksSlice.js";
import { useState } from "react";

export default function App() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const [taskTitle, setTaskTitle] = useState("");

    const handleAdd = () => {
        if (!taskTitle.trim()) return;
        dispatch(addTask(taskTitle));
        setTaskTitle("");
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <Header />

            {/* Add Task */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter task..."
                    className="border px-3 py-2 rounded w-full"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />

                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>

            {/* Task List */}
            <ul className="space-y-2">
                {tasks.allIds.map((id) => {
                    const task = tasks.byId[id];

                    return (
                        <li
                            key={id}
                            className="flex items-center justify-between bg-white shadow px-4 py-2 rounded"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => dispatch(toggleTask(id))}
                                />
                                <span
                                    className={
                                        task.completed
                                            ? "line-through text-gray-400"
                                            : ""
                                    }
                                >
                                    {task.title}
                                </span>
                            </div>

                            <button
                                onClick={() => dispatch(deleteTask(id))}
                                className="text-red-500 text-sm"
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
