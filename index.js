let password = document.getElementById("password");
let button = document.getElementById("generate");
let range = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue");
rangeValue.classList.add("rangeValue");

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let generatePassword = () => {
  let passwordLength = range.value;
  let passwordString = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  password.value = passwordString;
};

let updateRangeValue = () => {
  rangeValue.textContent = `Length: ${range.value}`;
};

button.addEventListener("click", generatePassword);
range.addEventListener("input", updateRangeValue);
