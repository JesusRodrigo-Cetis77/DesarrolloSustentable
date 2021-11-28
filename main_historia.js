window.onload = function () {
  document.getElementById("header__input-menu-historia").onclick = desplegar_historia;
};

function desplegar_historia() {
  if (document.getElementById("navegar-historia").classList.contains("show-historia")) {
    document.getElementById("navegar-historia").classList.remove("show-historia");
  } else {
    document.getElementById("navegar-historia").classList.add("show-historia");
  }
}
