import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";

export default function App() {
    return (
        <div className="max-w-xl mx-auto p-4">
            <Header />
            <AddTask />
            <FilterBar />
            <TaskList />
        </div>
    );
}
