import { BrowserRouter, Route, Routes } from "react-router";
import MainSection from "./MainSection";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
