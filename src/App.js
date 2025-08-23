import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Coba from "./pages/Coba";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coba" element={<Coba />} />

          {/* 404 Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
