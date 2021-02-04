import "./form.css";
import { createRegisterForm } from "./form";
import { createVerifyForm } from "./verify-form";
import { createNewFrom } from "./new-form";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
export const newform = () => createNewFrom();
