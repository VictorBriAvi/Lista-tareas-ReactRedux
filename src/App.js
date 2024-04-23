import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/create-task" element={<TaskForm />}></Route>
          <Route path="/edit-task/:id" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
