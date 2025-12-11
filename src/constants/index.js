export const PRIORITIES = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "urgent", label: "Urgent" },
];

export const PRIORITY_STYLES = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800",
};

export const FILTERS = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
];

export const CATEGORIES = [
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "learning", label: "Learning" },
    { value: "meetings", label: "Meetings" },
];

export const CATEGORY_STYLES = {
    work: {
        bg: "bg-indigo-100",
        text: "text-indigo-800",
        dot: "bg-indigo-500",
    },
    personal: { bg: "bg-pink-100", text: "text-pink-800", dot: "bg-pink-500" },
    learning: {
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        dot: "bg-emerald-500",
    },
    meetings: {
        bg: "bg-amber-100",
        text: "text-amber-800",
        dot: "bg-amber-500",
    },
    chores: { bg: "bg-sky-100", text: "text-sky-800", dot: "bg-sky-500" },
};
