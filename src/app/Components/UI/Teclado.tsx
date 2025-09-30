"use client";
import React, { useState, useEffect } from "react";
const customOrder = [0, 11, 1, 2, 11, 3, 4, 5, 1, 3, 6, 0, 1, 7, 11, 8, 9, 1, 8, 10, 7, 11, 20, 20, 20, 20, 20, 12, 12, 12, 12];


type Tecla = {
  key?: number;
  span?: number;
  w?: string;
  empty?: boolean;
};

const rows: Tecla[][] = [
  [{ w: "95%", span: 1 }, {empty: true}, {}, {}, {}, {}, { empty:true }, {}, {}, {},],
  [{}, {}, {}, { key: 4 }, { key: 6 }, { key: 0 }, { key: 10 }, { key: 12, span: 2, w: "90%" }, {}],
  [{ w: "90%", span: 2 }, { key: 1 }, { key: 3 }, {}, { key: 9 }, {}, {}, {}, {},],
  [{}, {}, { key: 8 }, { key: 5 }, { key: 7 }, { key: 2 }, {empty: true}, {empty: true}, { key: 30 }, {empty: true}],
  [{}, {}, { key: 11, span: 3 }, {}, {empty: true}, {}, {}, {}, {}, {}]
];

export default function Teclado() {

  const [isPressed, setIsPressed] = useState(Array(13).fill(false));
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        setIsPressed((prev) => {
          const newPressed = Array(13).fill(false);
          newPressed[customOrder[currentIndex]] = true;
          return newPressed;
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % customOrder.length);
      }, 480);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds, currentIndex]);

  return (
    <div
      className="w-[200px] h-3 bg-slate-500 relative"
      style={{ transform: "skewY(-20deg)" }}
    >
      <div
        className="h-[100px] w-full bg-slate-500 bottom-full absolute"
        style={{ transformOrigin: "bottom", transform: "skewX(45deg)" }}
      >
        <div className="grid w-full h-full bg-slate-500 grid-rows-5 gap-y-1 p-1">
          {rows.map((row, i) => (
           <div
           key={i}
           className={`w-full h-full grid gap-x-1 grid-rows-1`}
           style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
         >
           {row.map((keyObj: Tecla, j) => {
             if (keyObj.empty) return <div key={j}></div>;
             const isActiveKey = keyObj.key !== undefined ? isPressed[keyObj.key] : false;
             return (
               <div
                 key={j}
                 className={`teclas ${isActiveKey ? "active" : ""}`}
                 style={{
                   gridColumn: keyObj.span ? `span ${keyObj.span}` : undefined,
                   width: keyObj.w ? keyObj.w : undefined
                 }}
               />
             );
           })}
         </div>
          ))}
        </div>{" "}
      </div>
      <div
        className="h-full w-[100px] bg-slate-700 -left-[100px] top-0 absolute"
        style={{ transformOrigin: "right", transform: "skewY(45deg)" }}
      ></div>
    </div>
  );
}
