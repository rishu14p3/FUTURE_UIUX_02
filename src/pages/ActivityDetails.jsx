import { useParams, useNavigate } from "react-router-dom";
import { COLORS } from "../styles/theme";

/* ---------------- ACTIVITY DATA ---------------- */

const activityData = {
  meditation: {
    title: "Morning Meditation",
    desc: "Spend 10 minutes focusing on your breath to calm your mind."
  },
  energy: {
    title: "Energy Boost",
    desc: "A short activity to energize your body and uplift your mood."
  },
  focus: {
    title: "Deep Focus Session",
    desc: "Improve concentration with a short and effective focus routine."
  }
};

export default function ActivityDetails() {
  const { activityId } = useParams();
  const navigate = useNavigate();

  const activity = activityData[activityId];

  /* -------- SAFETY CHECK (VERY IMPORTANT) -------- */
  if (!activity) {
    return (
      <div style={styles.container}>
        <h2 style={{ color: "#000" }}>Activity not found ❌</h2>
        <button style={styles.backBtn} onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.title}>{activity.title}</h1>

      <p style={styles.desc}>{activity.desc}</p>

      <button
        style={styles.button}
        onClick={() => navigate("/dashboard")}
      >
        Mark as Completed ✔
      </button>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    minHeight: "100vh",
    padding: "24px",
    background: "linear-gradient(to bottom, #F6F7FB, #EEF1FF)"
  },

  backBtn: {
    border: "none",
    background: "none",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "12px",
    color: "#000"
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "12px"
  },

  desc: {
    color: COLORS.textLight,
    fontSize: "15px",
    marginBottom: "30px"
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    background: COLORS.success,
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  }
};
