import { useNavigate } from "react-router-dom";
import { COLORS } from "../styles/theme";

export default function HabitCard({ title, emoji }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/details")}
      style={{
        display: "flex",
        alignItems: "center",
        background: COLORS.card,
        padding: "18px",
        borderRadius: "18px",
        marginBottom: "16px",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
      }}
    >
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        background: "#EEF2FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        marginRight: "14px"
      }}>
        {emoji}
      </div>

      <div>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <p style={{ margin: "4px 0 0", color: COLORS.textLight }}>
          Tap to view details
        </p>
      </div>
    </div>
  );
}
