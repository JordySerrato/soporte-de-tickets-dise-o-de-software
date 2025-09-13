function mostrarSeccion(seccion) {
  // ✅ Marcar botón activo
  const botones = document.querySelectorAll(".sidebar button");
  botones.forEach(btn => btn.classList.remove("active"));

  // ✅ Redirecciones según el botón
  if (seccion === "tickets") {
    window.location.href = "Mis_tickets.html";
  } else if (seccion === "crear") {
    window.location.href = "Crear_ticket.html";
  } else if (seccion === "perfil") {
    window.location.href = "Perfil.html";
  } else if (seccion === "novedades") {
    window.location.href = "Novedades.html";
  }
}

function cerrarSesion() {
  alert("Sesión cerrada. Serás redirigido al login.");
  window.location.href = "Crear-cuenta.html"; 
}
