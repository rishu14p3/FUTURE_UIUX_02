import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { COLORS } from "../styles/theme";

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  // Workout data for chart (mock)
  const workoutData = {
    14: { cardio: 20, strength: 10, stretch: 5 },
    15: { cardio: 15, strength: 20, stretch: 10 },
    16: { cardio: 30, strength: 15, stretch: 10 },
    17: { cardio: 25, strength: 25, stretch: 15 }
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <h2 style={styles.greeting}>Welcome back 👋</h2>
          <p style={styles.date}>17 December 2025</p>
        </div>

        <button style={styles.logout} onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* HIGHLIGHT CARD */}
      <div style={styles.highlightCard}>
        <div>
          <h3 style={styles.highlightTitle}>Mindful Focus</h3>
          <p style={styles.highlightSub}>
            Complete today’s mental routine
          </p>
        </div>

        <button
          style={styles.startBtn}
          onClick={() => navigate("/details/focus")}
        >
          Start →
        </button>
      </div>

      {/* EXERCISE LIBRARY */}
      <div
        style={styles.exerciseBtn}
        onClick={() => navigate("/exercises")}
      >
        <div style={styles.exerciseIcon}>🏋️‍♂️</div>
        <div>
          <h4 style={styles.exerciseTitle}>Exercise Library</h4>
          <p style={styles.exerciseText}>
            View all workouts & exercises
          </p>
        </div>
      </div>

      {/* WORKOUT CALENDAR */}
      <h3 style={styles.sectionTitle}>Workout Calendar</h3>

      <div style={styles.dateStrip}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (day, index) => {
            const date = 14 + index;
            const isActive = selectedDate === date;

            return (
              <div
                key={date}
                style={{
                  ...styles.dateBox,
                  background: isActive ? COLORS.primary : "#fff",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedDate(date)}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: isActive ? "#fff" : COLORS.textLight
                  }}
                >
                  {day}
                </span>
                <strong style={{ color: isActive ? "#fff" : "#000" }}>
                  {date}
                </strong>
              </div>
            );
          }
        )}
      </div>

      {/* WORKOUT CHART */}
      {selectedDate && workoutData[selectedDate] && (
        <>
          <h3 style={styles.sectionTitle}>
            Workout Chart – {selectedDate} Dec
          </h3>

          <div style={styles.chartCard}>
            {Object.entries(workoutData[selectedDate]).map(
              ([key, value]) => (
                <div key={key} style={styles.chartRow}>
                  <span style={styles.chartLabel}>{key}</span>

                  <div style={styles.chartBarBg}>
                    <div
                      style={{
                        ...styles.chartBar,
                        width: `${value * 3}%`
                      }}
                    >
                      {value} min
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}

      {/* TODAY'S PLAN */}
      <h3 style={styles.sectionTitle}>Today’s Plan</h3>

      <div style={styles.planGrid}>
        <PlanCard
          title="Calm Start"
          emoji="🌿"
          duration="10 min"
          color="#6ca4caff"
          route="/calm-start"
        />

        <PlanCard
          title="Energy Boost"
          emoji="⚡"
          duration="8 min"
          color="#d081aeff"
          route="/details/energy"
        />

        <PlanCard
          title="Deep Focus"
          emoji="🧠"
          duration="15 min"
          color="#78e1b0ff"
          route="/details/focus"
        />
      </div>
    </div>
  );
}

/* ---------------- PLAN CARD ---------------- */

function PlanCard({ title, emoji, duration, color, route }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ ...styles.planCard, background: color }}
      onClick={() => navigate(route)}
    >
      <div style={styles.planEmoji}>{emoji}</div>
      <h4>{title}</h4>
      <p style={styles.planText}>{duration}</p>
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  greeting: { margin: 0, fontSize: "22px" },
  date: { margin: 0, fontSize: "13px", color: COLORS.textLight },
  logout: {
    border: "none",
    background: "#141414ff",
    color: "#e2d7d7ff",
    padding: "8px 14px",
    borderRadius: "20px",
    cursor: "pointer"
  },
  highlightCard: {
    background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
    borderRadius: "22px",
    padding: "20px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  
  highlightTitle: { margin: 0 },
  highlightSub: { margin: "6px 0 0", fontSize: "13px" },
  startBtn: {
    background: "#fff",
    color: COLORS.primary,
    border: "none",
    padding: "10px 18px",
    borderRadius: "20px",
    cursor: "pointer"
  },
  exerciseBtn: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "18px",
    borderRadius: "20px",
    background: "#fff",
    marginBottom: "24px",
    cursor: "pointer"
  },
  exerciseIcon: { fontSize: "28px" },
  exerciseTitle: { margin: 0, fontSize: "16px" },
  exerciseText: { margin: 0, fontSize: "13px", color: COLORS.textLight },
  dateStrip: { display: "flex", justifyContent: "space-between" },
  dateBox: {
    width: "42px",
    height: "54px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionTitle: { fontSize: "18px", margin: "20px 0 14px" },
  chartCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "16px"
  },
  chartRow: { marginBottom: "12px" },
  chartLabel: { fontSize: "13px" },
  chartBarBg: { background: "#E5E7EB", borderRadius: "10px" },
  chartBar: {
    height: "24px",
    background: COLORS.primary,
    color: "#fff",
    fontSize: "12px",
    paddingLeft: "8px",
    display: "flex",
    alignItems: "center"
  },
  planGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px"
  },
  planCard: { borderRadius: "20px", padding: "16px", cursor: "pointer" },
  planEmoji: { fontSize: "26px" },
  planText: { fontSize: "13px", color: COLORS.textLight },
  greeting: {
  margin: 0,
  fontSize: "22px",
  color: COLORS.heading   // ✅ ADDED
  },

  sectionTitle: {
    fontSize: "18px",
    margin: "20px 0 14px",
    color: COLORS.heading   // ✅ ADDED
  },

  highlightTitle: {
    margin: 0,
    fontSize: "20px",
    color: COLORS.white     // ✅ ADDED
  },

  exerciseTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
    color: COLORS.heading   // ✅ ADDED
  },

};
