window.onload = function () {
  document.getElementById("header__input-menu").onclick = desplegar_index;
};

function desplegar_index() {
  if (
    document.getElementById("navegar").classList.contains("show")
  ) {
    document.getElementById("navegar").classList.remove("show");
  } else {
    document.getElementById("navegar").classList.add("show");
  }
} 

