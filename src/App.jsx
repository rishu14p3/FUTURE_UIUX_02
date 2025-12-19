import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ActivityDetails from "./pages/ActivityDetails";
import ExerciseList from "./pages/ExerciseList"; // ✅ IMPORTANT

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />

        {/* MAIN FLOW */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ACTIVITY DETAILS (DYNAMIC) */}
        <Route path="/details/:activityId" element={<ActivityDetails />} />

        {/* ✅ EXERCISE LIST PAGE */}
        <Route path="/exercises" element={<ExerciseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
