import { createElement } from "../utils/creatElemet";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: "1",
  });

  return input;
}

export function createVerifyForm() {
  const form = createElement("form", {
    className: "form",
    onsubmit: function (event) {
      event.preventDefault();

      const secretPassword = 1111;
      const password =
        otpOne.value + otpTwo.value + otpThree.value + otpFour.value;

      if (password == secretPassword) {
        alert("Password is correct");
      } else {
        alert("Not");
      }
    },
  });

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();

  const passwordContainer = createElement("div", {
    className: "form__otp",
    children: [otpOne, otpTwo, otpThree, otpFour],
  });

  const title = createElement("h2", {
    innerText: "We have sent an OTP to your mobile",
  });

  const text = createElement("p", {
    innerText:
      "Please check your mobile number 071*****12 continue to reset your password",
  });

  const button = createElement("button", {
    innerText: "Next",
    className: "btn",
  });

  const hint = createElement("p", {
    innerText: "Didn't Receive?",
    className: "from__hitn",
  });

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
