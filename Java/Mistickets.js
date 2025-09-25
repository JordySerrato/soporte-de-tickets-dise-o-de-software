document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tablaTickets");

  // Acción: Eliminar fila
  tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
      const fila = e.target.closest("tr");
      if (confirm("¿Seguro que deseas eliminar este ticket?")) {
        fila.remove();
      }
    }
  });

  // Acción: Editar / Guardar fila
  tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("editar")) {
      const fila = e.target.closest("tr");
      const celdas = fila.querySelectorAll("td");

      // Omitimos la última celda de "Acciones"
      for (let i = 0; i < celdas.length - 1; i++) {
        const valor = celdas[i].innerText;
        celdas[i].innerHTML = `<input type="text" value="${valor}" />`;
      }

      e.target.textContent = "💾 Guardar";
      e.target.classList.remove("editar");
      e.target.classList.add("guardar");
    } 
    else if (e.target.classList.contains("guardar")) {
      const fila = e.target.closest("tr");
      const celdas = fila.querySelectorAll("td");

      // Guardar cambios
      for (let i = 0; i < celdas.length - 1; i++) {
        const input = celdas[i].querySelector("input");
        if (input) {
          celdas[i].innerText = input.value;
        }
      }

      e.target.textContent = "✏ Editar";
      e.target.classList.remove("guardar");
      e.target.classList.add("editar");
    }
  });
});
