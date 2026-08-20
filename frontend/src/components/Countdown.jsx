import { useEffect, useState } from "react";
import { EVENT_CONFIG } from "../config";

function calculateTimeLeft() {
  const difference =
    new Date(EVENT_CONFIG.eventDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
    finished: false
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.finished) {
    return (
      <div className="event-live">
        <span className="live-dot"></span>
        The celebration has begun
      </div>
    );
  }

  const units = [
    ["days", timeLeft.days],
    ["hours", timeLeft.hours],
    ["minutes", timeLeft.minutes],
    ["seconds", timeLeft.seconds]
  ];

  return (
    <div className="countdown">
      {units.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <div className="countdown-number">
            {String(value).padStart(2, "0")}
          </div>

          <div className="countdown-label">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countdown;