import React, { useEffect } from "react";
import "./button.css";

const root = document.documentElement;

const Button = (props: any) => {
  useEffect(() => {
    window.addEventListener("mousedown", (event) => {
      const el = event.target;
      // @ts-ignore: Unreachable code error
      const x = (event.clientX - el.offsetLeft) / el.offsetWidth;
      // @ts-ignore: Unreachable code error
      const y = (event.clientY - el.offsetTop) / el.offsetHeight;
      root.style.setProperty("--ripple-x", x.toString());
      root.style.setProperty("--ripple-y", y.toString());
    });
    return window.removeEventListener("mousedown", () => {});
  }, []);

  return (
    <button {...props} className="cui-button">
      {props.value}
    </button>
  );
};

export default Button;
