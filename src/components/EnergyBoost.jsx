import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompletionPopup from "./CompletionPopup";
import EnergyExerciseItem from "./EnergyExerciseItem";
import { COLORS } from "../styles/theme";

const exerciseData = [
  { name: "Jumping Jacks", icon: "🤸‍♂️" },
  { name: "High Knees", icon: "🏃‍♂️" },
  { name: "Squats", icon: "🏋️‍♀️" },
  { name: "Lunges", icon: "🦵" },
  { name: "Mountain Climbers", icon: "⛰️" },
  { name: "Burpees", icon: "🔥" },
  { name: "Skipping Rope", icon: "🪢" },
  { name: "Fast Walking / Light Jogging", icon: "🚶‍♂️" },
];

export default function EnergyBoost() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const toggleExercise = (name) => {
    setCompleted((prev) =>
      prev.includes(name)
        ? prev.filter((e) => e !== name)
        : [...prev, name]
    );
  };

  const progress = Math.round(
    (completed.length / exerciseData.length) * 100
  );

  useEffect(() => {
    if (completed.length === exerciseData.length) {
      setShowPopup(true);
    }
  }, [completed]);

  return (
    <div style={styles.container}>
      {/* 🔙 BACK BUTTON */}
      <button style={styles.backBtn} onClick={() => navigate("/dashboard")}>
        ← Back
      </button>

      {/* HEADING */}
      <h2 style={styles.heading}>Energy Boost ⚡</h2>
      <p style={styles.subText}>
        Power up your body with high-energy exercises
      </p>

      {/* PROGRESS BAR */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
      <p style={styles.progressText}>{progress}% completed</p>

      {/* EXERCISE LIST */}
      {exerciseData.map((exercise) => (
        <EnergyExerciseItem
          key={exercise.name}
          exercise={exercise}
          completed={completed.includes(exercise.name)}
          onClick={() => toggleExercise(exercise.name)}
        />
      ))}

      {showPopup && <CompletionPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    padding: 20,
    background: "#FFF4F8",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  backBtn: {
    border: "none",
    background: COLORS.white,
    color: COLORS.heading,
    padding: "8px 14px",
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 12,
  },
  heading: {
    margin: 0,
    fontSize: 22,
    color: COLORS.heading,
  },
  subText: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 12,
  },
  progressBar: {
    height: 10,
    background: "#F2D7E6",
    borderRadius: 10,
    overflow: "hidden",
    margin: "12px 0",
  },
  fill: {
    height: "100%",
    background: "#D081AE",
    transition: "0.3s",
  },
  progressText: {
    fontSize: 13,
    color: COLORS.subHeading,
    marginBottom: 16,
  },
};
