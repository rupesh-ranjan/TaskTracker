import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [storedTheme, setStoredTheme] = useState(() => {
        try {
            return localStorage.getItem("tasktracker_theme");
        } catch {
            return null;
        }
    });

    useEffect(() => {
        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        const active =
            storedTheme === "dark"
                ? "dark"
                : storedTheme === "light"
                ? "light"
                : prefersDark
                ? "dark"
                : "light";
        if (active === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [storedTheme]);

    const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");

    const toggle = () => {
        const next = isDark ? "light" : "dark";
        try {
            localStorage.setItem("tasktracker_theme", next);
        } catch {
            console.log("Error: theme is not found in local storage");
        }
        if (next === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        setStoredTheme(next);
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`
        relative h-6 w-12 flex items-center rounded-full transition-colors
        ${isDark ? "bg-gray-700" : "bg-gray-300"}
      `}
        >
            <span
                className={`
          h-5 w-5 rounded-full bg-white shadow transform transition-transform
          ${isDark ? "translate-x-6" : "translate-x-1"}
        `}
            />
        </button>
    );
}
