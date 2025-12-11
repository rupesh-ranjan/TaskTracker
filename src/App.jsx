import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
    return (
        <div className="max-w-xl mx-auto p-4">
            <Header />
            <AddTask />
            <TaskList />
        </div>
    );
}
