import { createElement } from "../utils/creatElemet";

const messageElement = createElement("p", {
  className: "message",
});

function createInputElement() {
  return createElement("input", {
    type: "number",
    className: "input",
    placeholder: "🐔",
    min: 0,
    max: 9,
  });
}
const inputElement1 = createInputElement();
const inputElement2 = createInputElement();
const inputElement3 = createInputElement();
const inputElement4 = createInputElement();

export function createNewFrom() {
  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your mobile",
      }),
      createElement("p", {
        innerText:
          "PlPlease check your mobile number 071*****12 continue to reset your password",
      }),
      messageElement,
      createElement("div", {
        className: "form__otp",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("button", {
        className: "btn",
        innerText: "Next",
      }),
      createElement("p", {
        className: "form__hint",
        innerText: "Didn't Receive?",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();

      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;

      if (password === "1111") {
        alert("Welcome!");
        messageElement.innerText = "";
      } else {
        messageElement.innerText = "Try again!";
      }
    },
  });
}
