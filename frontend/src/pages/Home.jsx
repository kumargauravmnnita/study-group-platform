function Home() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome to Study Group Platform</h1>
      <p>Your one-stop solution for placement preparation!</p>

      <div style={{ marginTop: "30px" }}>
        <h2>Features:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Study Groups</li>
          <li>Real-time Chat</li>
          <li>AI Question Generator</li>
          <li>Leaderboards</li>
          <li>Resource Library</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
