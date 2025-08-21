"use client";

import { useEffect, useState } from "react";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2026-02-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(Math.floor(difference / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convertimos a días, horas, minutos y segundos
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="digital-container">
      {timeLeft > 0 ? (
        <h1 className="digital-clock">
          {String(days).padStart(2, "0")}:
          {String(hours).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </h1>
      ) : (
        <h1 className="finished-text">🎉 ¡Ya soy Quiromasajista! 💆‍♂️</h1>
      )}
    </main>
  );
}
