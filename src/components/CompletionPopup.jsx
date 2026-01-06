import { COLORS } from "../styles/theme";

export default function CompletionPopup({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h3 style={styles.heading}>
          🎉 Today’s task is completed!
        </h3>

        <p style={styles.text}>
          You did amazing today 💙
        </p>

        <button style={styles.btn} onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  popup: {
    background: COLORS.white,
    padding: 26,
    borderRadius: 20,
    textAlign: "center",
    width: 300,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },

  heading: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: COLORS.heading,
  },

  text: {
    margin: "10px 0 18px",
    fontSize: "14px",
    color: COLORS.text,
  },

  btn: {
    padding: "10px 22px",
    borderRadius: 12,
    border: "none",
    background: COLORS.primary,
    color: COLORS.white,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
