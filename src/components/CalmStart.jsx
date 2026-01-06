import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseItem from "./ExerciseItem";
import CompletionPopup from "./CompletionPopup";
import { COLORS } from "../styles/theme";

const exerciseData = [
  { name: "Deep Breathing", icon: "🫁" },
  { name: "Neck Stretch", icon: "🧘‍♂️" },
  { name: "Shoulder Rolls", icon: "🔄" },
  { name: "Cat–Cow Stretch", icon: "🐈" },
  { name: "Child’s Pose", icon: "🌿" },
  { name: "Seated Forward Bend", icon: "🪑" },
  { name: "Slow Walking", icon: "🚶‍♂️" },
  { name: "Light Yoga Stretches", icon: "🧘‍♀️" },
];

export default function CalmStart() {
  const navigate = useNavigate(); // ✅ back navigation
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
      <h2 style={styles.heading}>Calm Start 🌿</h2>
      <p style={styles.subText}>
        Complete today’s calming routine
      </p>

      {/* PROGRESS BAR */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
      <p style={styles.progressText}>{progress}% completed</p>

      {/* EXERCISE LIST */}
      {exerciseData.map((exercise) => (
        <ExerciseItem
          key={exercise.name}
          exercise={exercise}
          completed={completed.includes(exercise.name)}
          onClick={() => toggleExercise(exercise.name)}
        />
      ))}

      {/* COMPLETION POPUP */}
      {showPopup && <CompletionPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    padding: 20,
    background: "#F3F6FF",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },

  backBtn: {
    border: "none",
    background: "#FFFFFF",
    color: COLORS.heading,
    padding: "8px 14px",
    borderRadius: "12px",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    marginBottom: "12px",
  },

  heading: {
    margin: 0,
    fontSize: "22px",
    color: COLORS.heading,
  },

  subText: {
    margin: "6px 0 12px",
    fontSize: "14px",
    color: COLORS.text,
  },

  progressBar: {
    height: 10,
    background: "#E0E4F7",
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
    fontSize: "13px",
    color: COLORS.subHeading,
    marginBottom: "16px",
  },
};
