document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formTicket");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Datos del formulario
    const ticket = {
      id: Date.now(), // ID único
      asunto: document.getElementById("titulo").value,
      descripcion: document.getElementById("descripcion").value,
      prioridad: document.getElementById("prioridad").value,
      categoria: document.getElementById("categoria").value,
      estado: "Abierto",
      fecha: new Date().toLocaleDateString("es-ES"),
      tecnico: "Sin asignar"
    };

    // Guardar en LocalStorage
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    alert("✅ Ticket creado");
    form.reset();

    // Ir a Mis Tickets
    window.location.href = "Mis_tickets.html";
  });
});
