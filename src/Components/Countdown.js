import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const valentineDate = new Date("2025-02-14T00:00:00"); // Valentine's Day date

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = valentineDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft("Happy Valentine's Day!"); // End of countdown
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="countdown-container">
      <h2>Countdown to Valentine's Day</h2>
      <p>{timeLeft === "" ? "Loading..." : timeLeft}</p>
    </div>
  );
}

export default Countdown;

