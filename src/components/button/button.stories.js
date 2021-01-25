import "./button.css";
import buttonfilled from "./button-filled.html";
import buttonborder from "./button-border.html";
import buttonfacebook from "./button-facebook.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const Filled = () => buttonfilled;
export const Border = () => buttonborder;
export const Facebook = () => buttonfacebook;

