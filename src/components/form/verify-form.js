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
  const password = document.createElement("input");
  password.className = "password";
  password.type = "password";
  password.placeholder = "*";

  const password2 = document.createElement("input");
  password2.className = "password";
  password2.type = "password";
  password2.placeholder = "*";

  const password3 = document.createElement("input");
  password3.className = "password";
  password3.type = "password";
  password3.placeholder = "*";

  const password4 = document.createElement("input");
  password4.className = "password";
  password4.type = "password";
  password4.placeholder = "*";
  allinputs.append(password, password2, password3, password4);

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
