let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#passwordConfirm");

showError = (input, message) => {
  let parentTag = input.parentElement;
  let renderError = parentTag.querySelector("small");
  parentTag.classList.add("error");
  renderError.innerText = message;
};

showSuccess = (input) => {
  let parentTag = input.parentElement;
  let renderError = parentTag.querySelector("small");
  parentTag.classList.remove("error");
  renderError.innerText = "";
};

checkEmail = (input) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  input.value = input.value.trim();
  let isEmailError = !regex.test(input.value);
  if (!isEmailError) {
    showSuccess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }
  return isEmailError;
};

checkPasswordLength = (input, min, max) => {
  input.value = input.value.trim();
  passwordLength = input.value.length;
  //   if (passwordLength < min || passwordLength > max) {
  //     showError(input, `Mật khẩu phải từ ${min} đến ${max} ký tự`);
  //     return true;
  //   }
  //   showSuccess(input);
  //   return false;

  passwordLength <= max && passwordLength >= min
    ? showSuccess(input)
    : showError(input, `Mật khẩu phải từ ${min} đến ${max} ký tự`);
};

checkPasswordConfirm = (password, passwordConfirm) => {
  password.value = password.value.trim();
  passwordConfirm.value = passwordConfirm.value.trim();
  password.value !== passwordConfirm.value
    ? showError(passwordConfirm, "Mật khẩu không trùng khớp")
    : showSuccess(passwordConfirm);
};

checkEmptyError = (arrInput) => {
  let isValid = false;
  arrInput.forEach((input) => {
    input.value = input.value.trim();
    if (input.value === "") {
      isValid = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });
  return isValid;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = checkEmptyError([username, email, password, passwordConfirm]);
  let isEmail = checkEmail(email);
  let isPasswordLength = checkPasswordLength(password, 4, 6);
  let isPasswordConfirm = checkPasswordConfirm(password, passwordConfirm);

  if (isValid || isEmail || isPasswordLength || isPasswordConfirm) {
    // nothing
  } else {
    //logic, call API,...
  }
});
