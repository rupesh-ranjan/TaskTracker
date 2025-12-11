import { useState } from "react";

export default function useLocalStorage(key, initialValue = null) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                typeof value === "function" ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (valueToStore === null || valueToStore === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch {} // TODO
    };

    return [storedValue, setValue];
}
