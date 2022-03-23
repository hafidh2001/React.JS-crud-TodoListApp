// import module with object literal {}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
