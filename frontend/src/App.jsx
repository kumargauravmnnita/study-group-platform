import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage("Error connecting to backend");
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Study Group Platform</h1>
      <p>Welcome to your placement preparation journey!</p>
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#333",
          borderRadius: "8px",
        }}
      >
        <h3>Backend Status:</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
