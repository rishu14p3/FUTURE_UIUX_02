import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles/theme";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Overlay for readability */}
      <div style={styles.overlay}></div>

      {/* Center Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>MindBloom</h1>
        <p style={styles.subtitle}>
          Train your mind. Strengthen your life.
        </p>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button
          style={styles.button}
          onClick={() => navigate("/home")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))"
  },

  content: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "320px",
    textAlign: "center"
  },

  title: {
    color: "white",
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "6px"
  },

  subtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    marginBottom: "24px"
  },

  input: {
    width: "70%",
    padding: "12px 14px",
    borderRadius: "24px",
    border: "none",
    outline: "none",
    marginBottom: "14px",
    fontSize: "14px"
  },

  button: {
    width: "60%",
    padding: "12px",
    borderRadius: "24px",
    border: "none",
    background: COLORS.primary,
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
    boxShadow: "0 10px 25px rgba(108,99,255,0.5)"
  }
};
