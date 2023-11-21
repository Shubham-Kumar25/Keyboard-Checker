const insert = document.getElementById("insert");
const keyElement = document.getElementById("key");
const keyCodeElement = document.getElementById("keycode");
const codeElement = document.getElementById("code");

window.addEventListener("keydown", (e) => {
  keyElement.innerHTML = `${e.key === " " ? "Space" : e.key}`;
  keyCodeElement.innerHTML = `${e.keyCode}`;
  codeElement.innerHTML = `${e.code}`;
});
