import React, { useEffect, useState } from "react";
function SimpleChat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [res, setRes] = useState("");
  const [data, setData] = useState([]);

  const handleLogin = () => {
    // Simulate login API call
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleSendMessage = () => {
    // Simulate send message API call
    fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, message }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        const exstingData = JSON.parse(localStorage.getItem("savedData")) || [];
        const updatedData = [...exstingData, res];
        localStorage.setItem("savedData", JSON.stringify(updatedData));
        // setData((prvData)=>[...prvData,res])
        setRes(res);
      });
    setMessage("");
  };
  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    setData(savedData);
  }, []);
  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    setData(savedData);
  }, [res]);

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          className="border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          className="border mt-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br></br>
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
      <ul>
        {data.map((item) => (
          <li>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleChat;
