"use client";

import { useEffect, useState } from "react";

type Star = {
  top: number;
  left: number;
  shining: boolean;
};

type Meteor = {
  top: number;
  left: number;
  delay: number;
  duration: number;
};

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 700 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      shining: Math.random() < 0.15,
    }));
    setStars(newStars);

    // Generar meteoritos aleatorios
    const newMeteors: Meteor[] = Array.from({ length: 2 }).map(() => ({
      top: Math.floor(Math.random() * (0 - 10 + 1)) + 0, // entero entre 10 y 50
      left: Math.random() * 100 - 50,  // posición horizontal inicial
      delay: Math.random() * 5,        // retraso de animación
      duration: 2 + Math.random() * 10, // duración de la animación
    }));
    setMeteors(newMeteors);
  }, []);

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden">
      {/* Estrellas */}
      {stars.map((star, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            star.shining ? "bg-yellow-200 animate-shine" : "bg-white animate-twinkle"
          }`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Meteoritos
      {meteors.map((meteor, i) => (
        <div
        key={i}
        className="absolute opacity-0 w-10 h-70 meteorito"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
            */}
    </div>
  );
}
