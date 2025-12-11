import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/tasks/tasksSlice.js";

export default function SearchBar() {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.tasks.searchQuery || "");

    const onChange = (e) => {
        dispatch(setSearch(e.target.value));
    };

    return (
        <div className="mb-4">
            <input
                type="search"
                value={query}
                onChange={onChange}
                placeholder="Search tasks by title..."
                className="input"
                aria-label="Search tasks"
            />
        </div>
    );
}
