import "./form.css";
import { createRegisterForm } from "./form";
import { createVerifyForm } from "./verify-form";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();