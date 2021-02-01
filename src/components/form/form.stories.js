import "./form.css";
import { createRegisterForm } from "./form";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();