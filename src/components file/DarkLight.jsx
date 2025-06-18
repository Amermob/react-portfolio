import { useRef } from "react";

export default function DarkLight() {
  const ball = useRef()

  function addDarkMod() {
    document.querySelector("body").classList.toggle("dark");
    ball.current.classList.toggle("handel-ball");
    document.querySelector("header").classList.toggle("dark");
  }
  
  return (
    <div onClick={addDarkMod} className="dark-mod">
      <div className="ball-container">
        <div ref={ball} className="ball"></div>
      </div>
    </div>
  );
}
