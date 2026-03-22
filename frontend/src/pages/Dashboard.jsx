function Dashboard() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Dashboard</h1>
      <p>Welcome back! Here's your overview:</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "#333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>5</h2>
          <p>Study Groups</p>
        </div>

        <div
          style={{
            padding: "20px",
            background: "#333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>23</h2>
          <p>Questions Solved</p>
        </div>

        <div
          style={{
            padding: "20px",
            background: "#333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>12</h2>
          <p>Resources Uploaded</p>
        </div>

        <div
          style={{
            padding: "20px",
            background: "#333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>#15</h2>
          <p>Your Rank</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
