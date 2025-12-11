import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-900 shadow p-4 mb-4">
            <div className="max-w-4xl mx-auto px-4 py-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-3xl">📝</div>

                    <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Task Tracker
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
