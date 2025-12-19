import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles/theme";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* App Logo / Title */}
      <h1 style={styles.title}>MindBloom</h1>

      {/* Tagline */}
      <p style={styles.subtitle}>
        Build habits. Improve mental wellness.
      </p>

      {/* CTA Button */}
      <button
        style={styles.button}
        onClick={() => navigate("/dashboard")}
      >
        Get Started
      </button>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to bottom, #F6F7FB, #EEF1FF)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "24px"
  },

  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "16px",
    color: COLORS.textLight,
    maxWidth: "300px",
    marginBottom: "30px",
    lineHeight: "22px"
  },

  button: {
    padding: "14px 36px",
    borderRadius: "30px",
    border: "none",
    background: COLORS.primary,
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(108,99,255,0.35)"
  }
};
