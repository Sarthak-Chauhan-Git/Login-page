const form = document.querySelector("form");
const newAccount = document.querySelector(".newAccount");
const container = document.querySelector(".container");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signup = document.querySelector("#signup");
const loginPart = document.querySelector(".part2");
const registerImage = document.querySelector(".part1");
const registerArea = document.querySelector(".part3");

newAccount.classList.remove("show");

let hoverTimeout;
let isSignin = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Username: ${username.value} Password: ${password.value}`);
  password.value = "";
});

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

signup.addEventListener("click", () => {
  isSignin = false;
  loginPart.classList.add("hidden");
  registerImage.classList.remove("part1");
  registerImage.classList.add("part1after");
  // signup.style.xtranslate = "-6rem";
  signup.hidden = true;
  setTimeout(() => {
    registerArea.classList.remove("hidden");
  });
});
