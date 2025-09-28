document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("#tablaTickets tbody");

  function cargar() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tabla.innerHTML = "";

    tickets.forEach((t, i) => {
      tabla.innerHTML += `
        <tr>
          <td>${t.id}</td>
          <td>${t.asunto}</td>
          <td>${t.estado}</td>
          <td>${t.fecha}</td>
          <td>${t.tecnico}</td>
          <td>
            <button class="editar" data-i="${i}">✏ Editar</button>
            <button class="eliminar" data-i="${i}">🗑 Eliminar</button>
          </td>
        </tr>`;
    });
  }

  // Acciones de la tabla
  tabla.addEventListener("click", (e) => {
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const i = e.target.dataset.i;

    // 🗑 Eliminar
    if (e.target.classList.contains("eliminar")) {
      tickets.splice(i, 1);
      localStorage.setItem("tickets", JSON.stringify(tickets));
      cargar();
    }

    // ✏ Editar / 💾 Guardar
    if (e.target.classList.contains("editar")) {
      const fila = e.target.closest("tr").children;
      for (let j = 0; j < fila.length - 1; j++) {
        fila[j].innerHTML = `<input value="${fila[j].innerText}">`;
      }
      e.target.textContent = "💾 Guardar";
      e.target.classList.replace("editar", "guardar");
    } else if (e.target.classList.contains("guardar")) {
      const fila = e.target.closest("tr").children;
      tickets[i] = {
        id: fila[0].querySelector("input").value,
        asunto: fila[1].querySelector("input").value,
        estado: fila[2].querySelector("input").value,
        fecha: fila[3].querySelector("input").value,
        tecnico: fila[4].querySelector("input").value,
      };
      localStorage.setItem("tickets", JSON.stringify(tickets));
      cargar();
    }
  });

  cargar();
});
