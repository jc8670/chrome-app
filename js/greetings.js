const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("h2#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const username_storage = localStorage.getItem(USERNAME_KEY);

if (username_storage != null) {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  clock.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username_storage}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  clock.classList.toggle(HIDDEN_CLASSNAME);
}
