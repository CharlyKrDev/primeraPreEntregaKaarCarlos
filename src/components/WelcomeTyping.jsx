import { TypeAnimation } from "react-type-animation";

export const WelcomeTyping = ({ message }) => {
  return (
    <TypeAnimation
      sequence={[message, 1000]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};