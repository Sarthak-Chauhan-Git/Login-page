const newAccount = document.querySelector(".newAccount");
const container = document.querySelector(".container");
const signup = document.querySelector(".signup");
const loginPart = document.querySelector(".part2");
const registerImage = document.querySelector(".part1");
const registerArea = document.querySelector(".part3");

newAccount.classList.remove("show");

let hoverTimeout;
let isSignin = true;

// toggle button movement
container.addEventListener("mouseenter", () => {
  hoverTimeout = setTimeout(() => {
    newAccount.classList.add("show");
  }, 1000);
});
container.addEventListener("mouseleave", () => {
  if (isSignin) {
    clearTimeout(hoverTimeout);
    newAccount.classList.remove("show");
  }
});

// transition toggle
signup.addEventListener("click", function optionToggle() {
  if (isSignin) {
    isSignin = false;
    loginPart.classList.add("hidden");
    registerImage.classList.remove("part1");
    registerImage.classList.add("part1after");
    signup.classList.remove("signup");
    signup.classList.add("signin");
    signup.innerHTML = "Already have an account?";
    registerArea.classList.remove("hidden");
  } else {
    isSignin = true;
    loginPart.classList.remove("hidden");
    registerImage.classList.remove("part1after");
    registerImage.classList.add("part1");
    signup.classList.remove("signin");
    signup.classList.add("signup");
    signup.innerHTML = "Don't have an account?";
    registerArea.classList.add("hidden");
  }
});

// SignIn Form data
const form1 = document.querySelector(".signinForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!username.value.trim() || !password.value) {
    alert("Please enter both username and password.");
  } else {
    console.log(`Username: ${username.value} Password: ${password.value}`);
    password.value = "";
  }
});

// Register Form data
let sentOTP = "123456"; // dummy OTP
const form2 = document.querySelector(".registerForm");
const newUser = document.querySelector("#newUsername");
const newPass = document.querySelector("#newPassword");
const phone = document.querySelector("#phone");
const reOtp = document.querySelector("#resendOTP");
const otp = document.querySelector("#otp");
const submit2 = document.querySelector(".btn2");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!newUser.value || !newPass.value) {
    alert("Please enter both username and password.");
  } else {
    const newUsername = newUser.value;
    const newPassword = newPass.value;
    const newPhone = phone.value;
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(newPhone)) {
      alert("Enter a valid 10-digit Indian phone number.");
      return;
    }

    console.log(`Registered as ${newUsername}, ${newPassword} , ${newPhone}`);
    if (isValidOTP(otp.value, sentOTP)) {
      alert("Account created successfully!");
      newPass.value = "";
      return;
    }
  }
});

// otp verify
function isValidOTP(recievedOTP, sentOTP) {
  if (recievedOTP !== sentOTP) {
    alert("Incorrect OTP");
    return false;
  }
  return true;
}

// Fogot password mechanism
const inp = document.querySelectorAll("input")
const forgotPass = document.querySelector("#forgotPass");
const phone2 = document.querySelector("#phone2");
const otp2 = document.querySelector("#otp2");
forgotPass.addEventListener("click", () => {
   phone2.classList.remove("hidden")
   otp2.classList.remove("hidden")
   forgotPass.classList.add("hidden");
   password.placeholder = "Enter new password";
   for(i of inp){
     i.style.margin = "0.5rem";
   }
});

// otp mechanism left only
