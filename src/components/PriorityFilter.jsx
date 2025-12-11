import { useSelector, useDispatch } from "react-redux";
import { PRIORITIES } from "../constants/index.js";
import { setPriorityFilter } from "../features/tasks/tasksSlice.js";

export default function PriorityFilter() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tasks.priorityFilter || "all");

    return (
        <div className="mb-4">
            {/* Horizontal scroll on mobile */}
            <div className="overflow-x-auto -mx-4 px-4">
                <div className="inline-flex gap-2">
                    {/* ALL button */}
                    <button
                        onClick={() => dispatch(setPriorityFilter("all"))}
                        className={`py-1 px-3 rounded text-sm ${
                            current === "all"
                                ? "bg-blue-600 text-white"
                                : "btn-outline"
                        }`}
                        aria-pressed={current === "all"}
                    >
                        All
                    </button>

                    {/* Priority buttons */}
                    {PRIORITIES.map((p) => {
                        const active = current === p.value;

                        return (
                            <button
                                key={p.value}
                                onClick={() =>
                                    dispatch(setPriorityFilter(p.value))
                                }
                                className={`py-1 px-3 rounded text-sm ${
                                    active
                                        ? "bg-blue-600 text-white"
                                        : "btn-outline"
                                }`}
                                aria-pressed={active}
                            >
                                {p.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
