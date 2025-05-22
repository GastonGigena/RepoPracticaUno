document.addEventListener("DOMContentLoaded", () => {
    const asistencia = document.getElementById("asistencia");
    const bloqueTema = document.getElementById("bloqueTema");
    const bloquePatrocinio = document.getElementById("bloquePatrocinio");
    const tema = document.getElementById("tema");
    const otroTema = document.getElementById("otroTema");
    const temaPersonalizado = document.getElementById("temaPersonalizado");
  
    asistencia.addEventListener("change", function () {
      const op = this.value;

      bloqueTema.classList.add("escondido");
      bloquePatrocinio.classList.add("escondido");
      otroTema.classList.add("escondido");
      tema.value = "";
      temaPersonalizado.value = "";
  

      if (op === "2") {
        bloqueTema.classList.remove("escondido");
      } else if (op === "3") {
        bloquePatrocinio.classList.remove("escondido");
      }
    });
  
    tema.addEventListener("change", function () {
      if (this.value === "otro") {
        otroTema.classList.remove("escondido");
      } else {
        otroTema.classList.add("escondido");
        temaPersonalizado.value = "";
      }
    });
  });
  