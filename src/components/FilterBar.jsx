import { useDispatch, useSelector } from "react-redux";
import { FILTERS } from "../constants/index.js";
import { setFilter } from "../features/tasks/tasksSlice.js";

export default function FilterBar() {
    const dispatch = useDispatch();
    const current = useSelector((s) => s.tasks.filter || "all");

    return (
        <div className="mb-3">
            <div className="overflow-x-auto -mx-4 px-4">
                <div className="inline-flex gap-2">
                    {FILTERS.map((f) => {
                        const active = current === f.value;
                        return (
                            <button
                                key={f.value}
                                onClick={() => dispatch(setFilter(f.value))}
                                className={`py-1 px-3 rounded text-sm ${
                                    active
                                        ? "bg-blue-600 text-white"
                                        : "btn-outline"
                                }`}
                                aria-pressed={active}
                            >
                                {f.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
