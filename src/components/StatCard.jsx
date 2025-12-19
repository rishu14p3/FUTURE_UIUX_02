import { COLORS } from "../styles/theme";

export default function StatCard({ label, value, icon }) {
  return (
    <div style={{
      flex: 1,
      padding: "22px",
      borderRadius: "20px",
      background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
      color: "white",
      boxShadow: "0 12px 30px rgba(108,99,255,0.35)"
    }}>
      <div style={{ fontSize: "28px" }}>{icon}</div>
      <h2 style={{ margin: "10px 0 4px" }}>{value}</h2>
      <p style={{ opacity: 0.85 }}>{label}</p>
    </div>
  );
}
