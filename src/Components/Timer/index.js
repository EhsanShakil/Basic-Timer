import React, { useState } from "react";
import "./index.css";

function Timer() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const timer = () => {
    const date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSecond(date.getSeconds());
  };
  setInterval(timer, 1000);

  return (
    <div className="App">
      <div className="timer">
        <h1>Hours</h1>
        <p className="clock">{hour}</p>
      </div>
      <div className="timer">
        <h1>Minutes</h1>
        <p className="clock">{minute}</p>
      </div>
      <div className="timer">
        <h1>Seconds</h1>
        <p className="clock">{second}</p>
      </div>
    </div>
  );
}

export default Timer;
