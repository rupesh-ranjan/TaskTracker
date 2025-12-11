import { useSelector, useDispatch } from "react-redux";
import { CATEGORIES, CATEGORY_STYLES } from "../constants/index.js";
import { setCategoryFilter } from "../features/tasks/tasksSlice.js";

export default function CategoryFilter() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tasks.categoryFilter || "all");

    return (
        <div className="flex items-center gap-2 mb-4">
            <button
                onClick={() => dispatch(setCategoryFilter("all"))}
                className={`px-3 py-1 rounded text-sm ${
                    current === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-white border text-gray-700"
                }`}
                aria-pressed={current === "all"}
            >
                All
            </button>

            {CATEGORIES.map((c) => {
                const active = current === c.value;
                const meta = CATEGORY_STYLES[c.value] || {
                    bg: "bg-gray-100",
                    dot: "bg-gray-500",
                };
                return (
                    <button
                        key={c.value}
                        onClick={() => dispatch(setCategoryFilter(c.value))}
                        className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${
                            active
                                ? "bg-blue-600 text-white"
                                : "bg-white border text-gray-700"
                        }`}
                        aria-pressed={active}
                    >
                        <span className={`w-3 h-3 rounded-full ${meta.dot}`} />
                        <span>{c.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
