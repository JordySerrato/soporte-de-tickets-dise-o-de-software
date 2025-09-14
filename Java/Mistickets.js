document.addEventListener("DOMContentLoaded", () => {
  const selectOrdenar = document.getElementById("ordenar");
  const tabla = document.getElementById("tablaTickets").querySelector("tbody");

  selectOrdenar.addEventListener("change", () => {
    const criterio = selectOrdenar.value;
    if (!criterio) return;

    const filas = Array.from(tabla.querySelectorAll("tr"));
    const indice = {
      id: 0,
      asunto: 1,
      estado: 2,
      fecha: 3,
      tecnico: 4
    }[criterio];

    filas.sort((a, b) => {
      const valorA = a.children[indice].textContent.trim().toLowerCase();
      const valorB = b.children[indice].textContent.trim().toLowerCase();

      if (criterio === "id") {
        return parseInt(valorA) - parseInt(valorB);
      } else if (criterio === "fecha") {
        const [diaA, mesA, anioA] = valorA.split("/").map(Number);
        const [diaB, mesB, anioB] = valorB.split("/").map(Number);
        return new Date(anioA, mesA - 1, diaA) - new Date(anioB, mesB - 1, diaB);
      } else {
        return valorA.localeCompare(valorB);
      }
    });

    filas.forEach(fila => tabla.appendChild(fila));
  });
});
