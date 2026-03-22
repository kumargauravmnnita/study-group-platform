import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1a1a1a",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #646cff",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Study Group Platform
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
