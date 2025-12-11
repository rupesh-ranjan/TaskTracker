import { useSelector, useDispatch } from "react-redux";
import { CATEGORIES, CATEGORY_STYLES } from "../constants/index.js";
import { setCategoryFilter } from "../features/tasks/tasksSlice.js";

export default function CategoryFilter() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tasks.categoryFilter || "all");

    return (
        <div className="mb-4">
            <div className="overflow-x-auto -mx-2 px-2">
                <div className="inline-flex gap-2 whitespace-nowrap">
                    <button
                        onClick={() => dispatch(setCategoryFilter("all"))}
                        className={`flex-shrink-0 py-1 px-3 rounded text-sm ${
                            current === "all"
                                ? "bg-blue-600 text-white"
                                : "btn-outline"
                        }`}
                        aria-pressed={current === "all"}
                        aria-label="Filter all categories"
                    >
                        All
                    </button>

                    {CATEGORIES.map((c) => {
                        const active = current === c.value;
                        const meta = CATEGORY_STYLES[c.value] || {
                            dot: "bg-gray-500",
                        };

                        return (
                            <button
                                key={c.value}
                                onClick={() =>
                                    dispatch(setCategoryFilter(c.value))
                                }
                                className={`flex-shrink-0 py-1 px-3 rounded text-sm flex items-center gap-2 ${
                                    active
                                        ? "bg-blue-600 text-white"
                                        : "btn-outline"
                                }`}
                                aria-pressed={active}
                                aria-label={`Filter ${c.label}`}
                            >
                                <span
                                    className={`w-3 h-3 rounded-full ${meta.dot}`}
                                />
                                <span>{c.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
