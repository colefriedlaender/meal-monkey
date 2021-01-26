import "./card.css";
import offers from "./card-offers.html";
import sriLanken from "./card-sriLanken copy.html";
import cardtemplate from "./card-template.html";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const CardOffers = () => offers;
export const CardSriLanken = () => sriLanken;
export const Template = () => cardtemplate;

