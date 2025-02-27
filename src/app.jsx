import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import WelcomePage from "./WelcomePage";
import FormPage from "./FormPage";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<FormPage page="Login" />} />
        <Route path="/signup" element={<FormPage page="Sign Up" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
