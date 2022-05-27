import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthViews from "./views/auth-views";

import "./App.css";
import AppViews from "./views/app-views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<AppViews />} />
        <Route path="*" element={<AuthViews />} />
      </Routes>
    </Router>
  );
}

export default App;
