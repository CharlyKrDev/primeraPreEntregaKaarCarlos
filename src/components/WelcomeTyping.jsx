import { TypeAnimation } from "react-type-animation";

export const WelcomeTyping = () => {
  return (
    <TypeAnimation
      sequence={["Bienvenid@ a tu tienda gamer amiga!", 1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
