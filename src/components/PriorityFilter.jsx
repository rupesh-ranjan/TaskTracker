import { useDispatch, useSelector } from "react-redux";
import { PRIORITIES } from "../constants/index.js";
import { setPriorityFilter } from "../features/tasks/tasksSlice.js";

export default function PriorityFilter() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tasks.priorityFilter || "all");

    return (
        <div className="flex items-center gap-2 mb-4">
            <button
                onClick={() => dispatch(setPriorityFilter("all"))}
                className={`px-3 py-1 rounded text-sm ${
                    current === "all" ? "bg-blue-600 text-white" : "btn-outline"
                }`}
                aria-pressed={current === "all"}
            >
                All
            </button>

            {PRIORITIES.map((p) => {
                const active = current === p.value;
                return (
                    <button
                        key={p.value}
                        onClick={() => dispatch(setPriorityFilter(p.value))}
                        className={`px-3 py-1 rounded text-sm ${
                            active ? "bg-blue-600 text-white" : "btn-outline"
                        }`}
                        aria-pressed={active}
                    >
                        {p.label}
                    </button>
                );
            })}
        </div>
    );
}
