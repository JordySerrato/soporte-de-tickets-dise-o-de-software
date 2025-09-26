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
  window.location.href = "login.html"; 
}

// Script para mostrar datos guardados
window.onload = function() {
  const nombre = localStorage.getItem('nombre') || 'Usuario';
  const correo = localStorage.getItem('correo') || 'correo@dominio.com';
  const telefono = localStorage.getItem('telefono') || '+51 000 000 000';
  const area = localStorage.getItem('area') || 'Área';
  const contraseña = localStorage.getItem('contraseña') ? '*******' : '*******';

  document.querySelector('.user-info h3').textContent = nombre;
  const infoBox = document.querySelector('.info-box');
  infoBox.innerHTML = `
    <p><b>Correo:</b> ${correo}</p>
    <p><b>Teléfono:</b> ${telefono}</p>
    <p><b>Área:</b> ${area}</p>
    <p><b>Contraseña:</b> ${contraseña}</p>
  `;
};

// Mostrar datos del usuario en perfil.html
window.onload = function() {
    const nombre = localStorage.getItem('nombre') || 'Usuario';
    const correo = localStorage.getItem('correo') || 'correo@dominio.com';
    const tipoUsuario = localStorage.getItem('tipoUsuario') || 'Tipo';
    const clave = localStorage.getItem('clave') ? '*******' : '*******';

    document.querySelector('.user-info h3').textContent = nombre;
    const infoBox = document.querySelector('.info-box');
    infoBox.innerHTML = `
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Tipo de usuario:</b> ${tipoUsuario}</p>
        <p><b>Contraseña:</b> ${clave}</p>
    `;
};

// Mostrar datos del usuario guardados en localStorage
    window.onload = function() {
      const nombre = localStorage.getItem('nombre') || 'Usuario';
      const correo = localStorage.getItem('correo') || 'correo@dominio.com';
      const tipoUsuario = localStorage.getItem('tipoUsuario') || 'Tipo';
      const clave = localStorage.getItem('clave') ? '*******' : '*******';

      document.querySelector('.user-info h3').textContent = nombre;
      const infoBox = document.querySelector('.info-box');
      infoBox.innerHTML = `
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Tipo de usuario:</b> ${tipoUsuario}</p>
        <p><b>Contraseña:</b> ${clave}</p>
      `;

      // Puedes actualizar los tickets y fecha de registro si quieres
      document.querySelector('.tickets').textContent = 'Cantidad de tickets enviados: 0';
      document.querySelector('.footer').textContent = 'Fecha de registro: 12/04/2024';
    };

    // Funciones de navegación de ejemplo
    function mostrarSeccion(seccion) {
      alert('Función para mostrar sección: ' + seccion);
    }

    function cerrarSesion() {
      localStorage.clear(); // Borra los datos del usuario
      window.location.href = 'login.html';
    }
