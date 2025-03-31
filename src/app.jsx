import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import WelcomePage from "./WelcomePage";
import FormPage from "./FormPage";
import { BrowserRouter, Route, Routes } from "react-router";
import ChatbotLayout from "./chatbot/ChatbotLayout";
import { useState } from "react";
function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<FormPage page="login" />} />
        <Route path="/signup" element={<FormPage page="signup" />} />
        <Route path="/chatbot" element={<ChatbotLayout isLight={isLight} setIsLight={setIsLight} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
