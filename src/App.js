import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  return (
    <div className="bg-black text-white">
      <Spinner/>
      <BrowserRouter>
        <Routes>
          {mainRoutes.map(({ url, component }) => {
            return <Route path={url} element={component} key={url} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
