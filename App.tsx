import React from "react";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000", color: "#FFD700", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>RUPPY NETWORK</h1>
      <div style={{ margin: "20px", padding: "30px", border: "2px solid #FFD700", borderRadius: "50%" }}>
        <span style={{ fontSize: "2rem" }}>⛏️</span>
      </div>
      <p style={{ color: "#FFF", fontSize: "1.2rem" }}>STATUS: ACTIVE</p>
    </div>
  );
}
