import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SustainabilityPage } from "./pages/SustainabilityPage/SustainabilityPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
