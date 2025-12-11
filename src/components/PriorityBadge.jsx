import { PRIORITY_STYLES } from "../constants/index.js";

export default function PriorityBadge({ priority }) {
    const style = PRIORITY_STYLES[priority] || PRIORITY_STYLES.low;

    return (
        <span
            className={`px-2 py-0.5 text-xs rounded-full font-medium ${style}`}
        >
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
    );
}
