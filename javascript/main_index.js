window.onload = function () {
  document.getElementById("header__input-menu-index").onclick = desplegar_index;
};

function desplegar_index() {
  if (
    document.getElementById("navegar-index").classList.contains("show-index")
  ) {
    document.getElementById("navegar-index").classList.remove("show-index");
  } else {
    document.getElementById("navegar-index").classList.add("show-index");
  }
}
