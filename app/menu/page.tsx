export default function MenuPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Our Menu</h1>

      <a
        href="/menu/mannat_rooftop_menu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "15px 30px",
          background: "#facc15",
          color: "#000",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        View Full Menu
      </a>
    </div>
  );
}
