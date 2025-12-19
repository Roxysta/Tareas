const boton = document.getElementById("temaBtn");

if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("oscuro");
  boton.textContent = "☀️ Modo claro";
}

boton.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  const tema = document.body.classList.contains("oscuro") ? "oscuro" : "claro";
  localStorage.setItem("tema", tema);

  boton.textContent = tema === "oscuro" ? "☀️ Modo claro" : "🌙 Modo oscuro";
});