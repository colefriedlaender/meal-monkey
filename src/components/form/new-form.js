import { createElement } from "../utils/creatElemet";

function createInputElement(){
    return createElement("input", {
        type: "number",
        className: "input",
        placeholder: "*",
        placeholder: "*",
    });
}
const inputElement1 = createInputElement();
const inputElement2 = createInputElement();
const inputElement3 = createInputElement();
const inputElement4 = createInputElement();


export function createVerifyForm(){
    return createElement("form"{
        className: "form",
        children: [
            createElement("h2", {
                innerText: "We have sent an OTP to your mobile",
            }),
            createElement("p", {
                innerText: "PlPlease check your mobile number 071*****12 continue to reset your password",
            }),
            createElement("div", {
                className: "from__otp",
                children: [
                    inputElement1, inputElement2, inputElement3, inputElement4
                ],
            }),
            createElement("button", {
                className: "btn",
                innerText: "Next",
            }),
            createElement("p"{
                className: "form__hint",
                innerText: "Didn't Receive?",
                hildren: [
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
        otpOne.value + otpTwo.value + otpThree.value + otpFour.value;
        if (password === "1111") {
            alert("Welcome!");
        }else{
            alert("Your dummy!")
        }
    },
  });
}