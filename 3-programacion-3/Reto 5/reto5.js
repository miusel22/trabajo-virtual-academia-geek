
const success = document.querySelector(".success");
const error = document.querySelector(".error");
const warning = document.querySelector(".warning");

const title = document.getElementById("title");
const text = document.getElementById("text");


if (success && success.className === "success") {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}

if (error && error.className === "error") {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
}

if (warning && warning.className === "warning") {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
}