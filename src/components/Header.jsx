export default function Header({ title }) {
  return (
    <h1 style={{
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "0",
      color: "#000"   // FORCE BLACK
    }}>
      {title}
    </h1>
  );
}
