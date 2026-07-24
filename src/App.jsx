import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Apps from "./components/Apps";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Apps />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
