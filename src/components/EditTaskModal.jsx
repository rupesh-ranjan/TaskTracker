import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../features/tasks/tasksSlice.js";
import { PRIORITIES, CATEGORIES } from "../constants/index.js";
import Modal from "./Modal.jsx";

export default function EditTaskModal({ task, onClose }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title || "");
    const [priority, setPriority] = useState(task.priority || "low");
    const [category, setCategory] = useState(
        task.category || CATEGORIES[0].value
    );

    const handleSave = () => {
        const payload = {
            id: task.id,
            title: title.trim(),
            priority,
            category,
        };
        dispatch(updateTask(payload));
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Edit Task</h3>

                <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input"
                    />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-sm mb-1">Priority</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="select"
                        >
                            {PRIORITIES.map((p) => (
                                <option key={p.value} value={p.value}>
                                    {p.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="select"
                        >
                            {CATEGORIES.map((c) => (
                                <option key={c.value} value={c.value}>
                                    {c.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="btn-outline">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="btn-primary">
                        Update
                    </button>
                </div>
            </div>
        </Modal>
    );
}
