import Header from "./Header";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import PopupPage from "./PopupPage";
import MainSection from "./MainSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editMode, setEditMode]= useState(false);
  const [taskIndex , setTaskIndex] = useState(0)
  return (
    <div className={darkMode ? "darkmode" : showPopup ? "popup-mode" : "lightmode"}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <MainSection setEditMode={setEditMode} tasks={tasks}  setTaskIndex={setTaskIndex} setShowPopup={setShowPopup} setTasks={setTasks} setTaskInput={setTaskInput} taskInput={taskInput} />
      {showPopup && <PopupPage taskIndex={taskIndex} darkMode={darkMode} editMode={editMode} setEditMode={setEditMode} tasks={tasks} setTasks={setTasks} setShowPopup={setShowPopup} setTaskInput={setTaskInput} taskInput={taskInput} />}
      {showPopup && <div className="dark-screen"></div>}
    </div>
  );
}
export default App;
