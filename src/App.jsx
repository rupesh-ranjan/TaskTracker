import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import AutoSave from "./components/AutoSave.jsx";
import PriorityFilter from "./components/PriorityFilter.jsx";
import "./App.css";

export default function App() {
    return (
        <div className="max-w-xl mx-auto p-4">
            <Header />
            <AddTask />
            <SearchBar />
            <FilterBar />
            <PriorityFilter />
            <CategoryFilter />
            <TaskList />
            <AutoSave />
        </div>
    );
}
