import React from "react";
import Icons from "../Icons/Icons";
import "./Card.css";

export default function Card({ player, onPlay, index, gameEnd }) {
  let icon = <Icons />;
  if (player == "X") {
    icon = <Icons name="cross" />;
  } else if (player == "O") {
    icon = <Icons name="circle" />;
  }
  return (
    <div
      className="card"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {icon}
    </div>
  );
}
