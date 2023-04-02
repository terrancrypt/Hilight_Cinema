import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Page/HomePage/HomePage";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout Component={HomePage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
