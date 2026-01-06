
import { COLORS } from "../styles/theme";

export default function EnergyExerciseItem({ exercise, completed, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.card,
        background: completed ? "#FFE3EF" : COLORS.white,
        border: completed ? "1px solid #D081AE" : "1px solid transparent",
      }}
    >
      <div style={styles.left}>
        <span style={styles.icon}>{exercise.icon}</span>
        <span
          style={{
            ...styles.name,
            color: completed ? "#D081AE" : COLORS.heading,
          }}
        >
          {exercise.name}
        </span>
      </div>
      <span>{completed ? "✅" : "⬜"}</span>
    </div>
  );
}

const styles = {
  card: {
    padding: "14px 16px",
    borderRadius: 14,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "0.25s",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    fontSize: 22,
  },
  name: {
    fontSize: "15px",
    fontWeight: 500,
  },
};
