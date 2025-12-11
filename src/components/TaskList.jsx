import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";
import { selectVisibleTasks } from "../features/tasks/tasksSelectors.js";

export default function TaskList() {
    const tasks = useSelector((state) => selectVisibleTasks(state));

    if (!tasks.length) {
        return (
            <div className="text-sm text-gray-500 mt-4">No tasks to show.</div>
        );
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
