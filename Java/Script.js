function mostrarSeccion(seccion) {
  const contenido = document.getElementById("contenido");

  if (seccion === "tickets") {
    contenido.innerHTML = `
      <h2>📄 Mis Tickets</h2>
      <p>Aquí aparecerán tus tickets registrados.</p>
    `;
  } else if (seccion === "crear") {
    contenido.innerHTML = `
      <h2>➕ Crear Ticket</h2>
      <p>Formulario básico para crear un nuevo ticket.</p>
    `;
  } else if (seccion === "perfil") {
    contenido.innerHTML = `
      <div class="profile-card">
        <div class="avatar"></div>
        <div class="user-info">
          <h3>Merari Abidai Ramírez</h3>
          <div class="info-box">
            <p><b>Correo:</b> ari.perez@gmail.com</p>
            <p><b>Teléfono:</b> +51 987 654 321</p>
            <p><b>Área:</b> Ventas</p>
            <p><b>Contraseña:</b> *******</p>
          </div>
          <div class="tickets">Cantidad de tickets enviados: 8</div>
          <div class="footer">Fecha de registro: 12/04/2024</div>
        </div>
      </div>
    `;
  }

  // Marcar botón activo
  const botones = document.querySelectorAll(".sidebar button");
  botones.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

function cerrarSesion() {
  alert("Sesión cerrada.");
}
