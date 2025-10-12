import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import DashboardPage from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/next" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
