import "./input.css";
import inputemail from "./input-email.html";
import inputpassword from "./input-password.html";


export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const Email = () => inputemail;
export const Password = () => inputpassword;


