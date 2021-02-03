function createOTPInputElement() {
  const password = document.createElement("input");
  password.type = "password";
  password.placeholder = "*";
  password.className = "input";
  password.maxLength = "1";

  return password;
}

export function createVerifyForm() {
  const verify = document.createElement("verify");
  verify.className = "verify";

  const headline = document.createElement("h2");
  headline.innerText = "We have send an OTP to your mobile";

  const subline = document.createElement("subline");
  subline.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  // Password
  const allinputs = document.createElement("allinputs");

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();

  allinputs.append(otpOne, otpTwo, otpThree, otpFour);

  // Button
  const button = document.createElement(button);
  button.className = "btn";
  button.innerText = "Next";
  function reset() {
    alert("Loged In");
  }
  button.addEventListener("click", reset);

  const end = document.createElement("bottum");
  end.innerText = "Didnt Receive?";

  verify.append(headline, subline, allinputs, button, end);
  return verify;
}
