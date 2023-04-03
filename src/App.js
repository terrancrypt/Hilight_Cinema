import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Page/HomePage/HomePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import DetailPage from "./Page/DetailPage/DetailPage";

function App() {
  return (
    <div className="bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout Component={HomePage} />} />
          <Route path="/login" element={<MainLayout Component={LoginPage} />} />
          <Route
            path="/detail/:id"
            element={<MainLayout Component={DetailPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
