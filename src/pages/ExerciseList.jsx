import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles/theme";

const exercises = [
  { name: "Jumping Jacks", emoji: "🤸", level: "Easy", time: "5 min" },
  { name: "Push Ups", emoji: "💪", level: "Medium", time: "8 min" },
  { name: "Squats", emoji: "🏋️", level: "Medium", time: "10 min" },
  { name: "Plank Hold", emoji: "🧘", level: "Hard", time: "4 min" },
  { name: "Mountain Climbers", emoji: "⛰️", level: "Hard", time: "6 min" },
  { name: "Burpees", emoji: "🔥", level: "Hard", time: "7 min" },
  { name: "Lunges", emoji: "🚶", level: "Medium", time: "8 min" },
  { name: "High Knees", emoji: "⚡", level: "Easy", time: "5 min" },
  { name: "Stretching", emoji: "🧘‍♀️", level: "Easy", time: "6 min" },
  { name: "Cool Down Walk", emoji: "🚶‍♂️", level: "Easy", time: "10 min" }
];

export default function ExerciseList() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Header */}
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 style={styles.title}>Exercise Library</h2>
      <p style={styles.subtitle}>
        Choose an exercise to get started
      </p>

      {/* Exercise Cards */}
      {exercises.map((ex, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => alert(`${ex.name} clicked`)}
        >
          <div style={styles.left}>
            <div style={styles.emoji}>{ex.emoji}</div>
            <div>
              <h4 style={styles.exerciseName}>{ex.name}</h4>
              <p style={styles.meta}>
                {ex.time} • {ex.level}
              </p>
            </div>
          </div>

          <div style={styles.arrow}>›</div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    minHeight: "100vh",
    padding: "22px",
    background: "linear-gradient(to bottom, #F6F7FB, #EEF1FF)"
  },

  backBtn: {
    background: "none",
    border: "none",
    fontSize: "16px",
    marginBottom: "10px",
    cursor: "pointer",
    color: "#000"
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "6px"
  },

  subtitle: {
    fontSize: "14px",
    color: COLORS.textLight,
    marginBottom: "24px"
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 18px",
    borderRadius: "20px",
    background: "#fff",
    marginBottom: "14px",
    cursor: "pointer",
    boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px"
  },

  emoji: {
    fontSize: "28px",
    background: "#EEF2FF",
    width: "46px",
    height: "46px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  exerciseName: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
    color: "#000"
  },

  meta: {
    margin: 0,
    fontSize: "13px",
    color: COLORS.textLight
  },

  arrow: {
    fontSize: "22px",
    color: COLORS.primary
  }
};
