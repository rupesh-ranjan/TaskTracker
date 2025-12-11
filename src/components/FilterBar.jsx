import { useDispatch, useSelector } from "react-redux";
import { FILTERS } from "../constants/index.js";
import { setFilter } from "../features/tasks/tasksSlice.js";

export default function FilterBar() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tasks.filter || "all");

    return (
        <div className="flex items-center gap-2 mb-4">
            {FILTERS.map((f) => {
                const active = f.value === current;
                return (
                    <button
                        key={f.value}
                        onClick={() => dispatch(setFilter(f.value))}
                        className={`px-3 py-1 rounded text-sm ${
                            active ? "bg-blue-600 text-white" : "btn-outline"
                        }`}
                        aria-pressed={active}
                    >
                        {f.label}
                    </button>
                );
            })}
        </div>
    );
}
