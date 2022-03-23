// import module with object literal {}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
