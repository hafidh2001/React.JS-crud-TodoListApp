// import module with object literal {}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id/edit" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
