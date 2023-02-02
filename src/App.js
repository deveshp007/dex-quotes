import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line
  }, []);

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data);
    setBackgroundColor(generateRandomColor());
  };

  const generateRandomColor = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f39c12",
      "#d35400",
      "#c0392b"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };
  document.body.style.backgroundColor = backgroundColor;
  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1>DeX Quote Machine</h1>
      <p>"{quote.content}"</p>
      <span>- {quote.author}</span>
      <br />
      <button className="btn" onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;

