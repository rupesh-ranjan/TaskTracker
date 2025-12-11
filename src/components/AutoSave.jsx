import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage.js";
import useDebounce from "../hooks/useDebounce.js";
import { loadTasks } from "../features/tasks/tasksSlice.js";

export default function AutoSave() {
    const dispatch = useDispatch();
    const tasksState = useSelector((s) => s.tasks);
    const [stored, setStored] = useLocalStorage("tasktracker_data", null);
    const debouncedTasks = useDebounce(tasksState, 500);

    useEffect(() => {
        if (stored && stored.tasks) {
            dispatch(loadTasks(stored.tasks));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setStored({ tasks: debouncedTasks });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedTasks]);

    return null;
}
