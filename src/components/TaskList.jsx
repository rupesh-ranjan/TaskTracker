import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks);

    return (
        <ul className="space-y-2">
            {tasks.allIds.map((id) => (
                <TaskItem key={id} task={tasks.byId[id]} />
            ))}
        </ul>
    );
}
