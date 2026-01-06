import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ActivityDetails from "./pages/ActivityDetails";
import ExerciseList from "./pages/ExerciseList";

// ✅ IMPORT CalmStart (THIS WAS MISSING)
import CalmStart from "./components/CalmStart";
import EnergyBoost from "./components/EnergyBoost";
import DeepFocus from "./components/DeepFocus";
import MindfulFocus from "./components/MindfulFocus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />

        {/* MAIN FLOW */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ✅ Calm Start, Energy Boost, Deep Focus and Mindful Focus Exercise Flow */}
        <Route path="/calm-start" element={<CalmStart />} />
        <Route path="/energy-boost" element={<EnergyBoost />} />
        <Route path="/deep-focus" element={<DeepFocus />} />
        <Route path="/mindful-focus" element={<MindfulFocus />} />

        {/* ACTIVITY DETAILS (DYNAMIC) */}
        <Route path="/details/:activityId" element={<ActivityDetails />} />

        {/* EXERCISE LIST PAGE */}
        <Route path="/exercises" element={<ExerciseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
