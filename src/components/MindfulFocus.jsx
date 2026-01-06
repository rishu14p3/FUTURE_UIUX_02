
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MindfulFocusExerciseItem from "./MindfulFocusExerciseItem";
import CompletionPopup from "./CompletionPopup";
import { COLORS } from "../styles/theme";

const exerciseData = [
  { name: "Box Breathing", icon: "🟦" },
  { name: "Deep Belly Breathing", icon: "🫁" },
  { name: "Tree Pose", icon: "🌳" },
  { name: "Single-leg Balance", icon: "🦵" },
  { name: "Plank Hold", icon: "🧘‍♂️" },
  { name: "Wall Sit", icon: "🧱" },
  { name: "Slow Push-ups", icon: "💪" },
  { name: "Controlled Squats", icon: "🏋️‍♀️" },
  { name: "Seated Mindfulness Meditation", icon: "🧠" },
  { name: "Body Scan Meditation", icon: "🌬️" },
];

export default function MindfulFocus() {
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
      <button
        style={styles.backBtn}
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>

      {/* HEADING */}
      <h2 style={styles.heading}>Mindful Focus 🧠</h2>
      <p style={styles.subText}>
        Calm your mind & strengthen awareness
      </p>

      {/* PROGRESS BAR */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
      <p style={styles.progressText}>{progress}% completed</p>

      {/* EXERCISE LIST */}
      {exerciseData.map((exercise) => (
        <MindfulFocusExerciseItem
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
    background: "#EEF2FF",
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
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
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
    background: "#E0E7FF",
    borderRadius: 10,
    overflow: "hidden",
    margin: "12px 0",
  },

  fill: {
    height: "100%",
    background: COLORS.primary,
    transition: "0.3s",
  },

  progressText: {
    fontSize: 13,
    color: COLORS.subHeading,
    marginBottom: 16,
  },
};
