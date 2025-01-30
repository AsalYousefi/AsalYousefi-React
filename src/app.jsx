import Header from "./Header";
import PopupButton from "./PopupButton";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import PopupPage from "./PopupPage";
import MainSection from "./MainSection";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  return (
    <div className={darkMode ? "darkmode" : showPopup ? "popup-mode" : "body"}>
      <Header setDarkMode={setDarkMode} />
      <MainSection tasks={tasks} />
      <PopupButton setShowPopup={setShowPopup} />
      {showPopup && <PopupPage tasks={tasks} setShowPopup={setShowPopup} setTasks={setTasks} />}
      {showPopup && <div className="dark-screen"></div>}
    </div>
  );
}
export default App;
