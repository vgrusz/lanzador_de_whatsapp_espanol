function lanzar() {
  let prefijoNacional = document.getElementById("prefijoNacional").value;

  let telefono = document.getElementById("telefono").value;

  let telefonoSinEspacios = telefono.split(/\s/).join("");

  let primerTextoConstante = document.getElementById("primerTextoConstante").value;

  let primerTextoVariable = document.getElementById("primerTextoVariable").value;

  let segundoTextoConstante = document.getElementById("segundoTextoConstante").value;

  let segundoTextoVariable = document.getElementById("segundoTextoVariable").value;

  let ultimoTextoConstante = document.getElementById("ultimoTextoConstante").value;

  document.getElementById("telefono").value = "";
  document.getElementById("primerTextoVariable").value = "";
  document.getElementById("segundoTextoVariable").value = "";

  let tieneApp = document.getElementById("radioSi").checked;

  let appAbsent = tieneApp ? 0 : 1;
  let url =
    "https://api.whats" +
    "app.com/send/?phone=" +
    prefijoNacional +
    telefonoSinEspacios +
    "&text=" +
    primerTextoConstante +
    " " +
    primerTextoVariable +
    " " +
    segundoTextoConstante +
    " " +
    segundoTextoVariable +
    " " +
    ultimoTextoConstante +
    "&app_absent=" +
    appAbsent;

  window.open(url);
}

function guardarTextosConstantes() {
  localStorage.setItem("prefijoNacional", document.getElementById("prefijoNacional").value);
  localStorage.setItem("primerTextoConstante", document.getElementById("primerTextoConstante").value);
  localStorage.setItem("segundoTextoConstante", document.getElementById("segundoTextoConstante").value);
  localStorage.setItem("ultimoTextoConstante", document.getElementById("ultimoTextoConstante").value);
}

function blanquearTextosConstantes() {
  document.getElementById("prefijoNacional").value = "";
  document.getElementById("primerTextoConstante").value = "";
  document.getElementById("segundoTextoConstante").value = "";
  document.getElementById("ultimoTextoConstante").value = "";

  localStorage.setItem("prefijoNacional", "");
  localStorage.setItem("primerTextoConstante", "");
  localStorage.setItem("segundoTextoConstante", "");
  localStorage.setItem("ultimoTextoConstante", "");
}

function appLoad() {
  document.getElementById("prefijoNacional").value = localStorage.getItem("prefijoNacional");
  document.getElementById("primerTextoConstante").value = localStorage.getItem("primerTextoConstante");
  document.getElementById("segundoTextoConstante").value = localStorage.getItem("segundoTextoConstante");
  document.getElementById("ultimoTextoConstante").value = localStorage.getItem("ultimoTextoConstante");
}
