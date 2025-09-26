document.addEventListener("DOMContentLoaded", () => {
  const mensajeError = document.getElementById("mensaje-error");

  // ================= REGISTRO =================
  const form = document.getElementById("registroForm");
  const tipoUsuario = document.getElementById("tipoUsuario");
  const extraCampos = document.getElementById("extraCampos");

  if (tipoUsuario) {
    tipoUsuario.addEventListener("change", () => {
      extraCampos.innerHTML = "";

      if (tipoUsuario.value === "cliente") {
        extraCampos.innerHTML = `
          <input type="text" id="organizacion" placeholder="Organización/Empresa" required>
        `;
      } else if (tipoUsuario.value === "tecnico") {
        extraCampos.innerHTML = `
          <input type="text" id="organizacion" placeholder="Organización/Empresa" required>
          <input type="text" id="departamento" placeholder="Departamento" required>
          <input type="password" id="claveTecnico" placeholder="Clave de técnico" required>
        `;
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      mensajeError.style.display = "none";

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim().toLowerCase();
      const clave = document.getElementById("clave").value.trim();

      if (!nombre || !correo || !clave || !tipoUsuario.value) {
        mostrarError("Por favor, completa todos los campos.");
        return;
      }

      if (tipoUsuario.value === "tecnico" && document.getElementById("claveTecnico").value !== "tec123") {
        mostrarError("Clave de técnico incorrecta.");
        return;
      }

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      if (usuarios.some(u => u.correo === correo)) {
        mostrarError("Ese correo ya está registrado.");
        return;
      }

      const nuevoUsuario = { nombre, correo, clave, tipo: tipoUsuario.value };
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("✅ Registro exitoso, ahora puedes iniciar sesión.");
      window.location.href = "login.html";
    });
  }

  // ================= LOGIN =================
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const usuario = document.getElementById("usuario").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const encontrado = usuarios.find(u => u.correo === usuario && u.clave === password);

      if (encontrado) {
        // Guardar sesión activa
        localStorage.setItem("sesionActiva", JSON.stringify(encontrado));

        if (encontrado.tipo === "cliente") {
          window.location.href = "Mis_tickets.html";
        } else if (encontrado.tipo === "tecnico") {
          window.location.href = "tecnico.html";
        }
      } else {
        mostrarError("⚠ Usuario o contraseña incorrectos. Intenta de nuevo.");
      }
    });
  }

  // ================= FUNCION ERROR =================
  function mostrarError(msg) {
    if (mensajeError) {
      mensajeError.textContent = msg;
      mensajeError.style.display = "block";
      mensajeError.classList.remove("shake");
      void mensajeError.offsetWidth; // reinicia animación
      mensajeError.classList.add("shake");
    }
  }
});

function guardarCuenta() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const area = document.getElementById('area').value;
  const contraseña = document.getElementById('contraseña').value;

  // Guardar en localStorage
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('correo', correo);
  localStorage.setItem('telefono', telefono);
  localStorage.setItem('area', area);
  localStorage.setItem('contraseña', contraseña);

  // Redirigir al perfil
  window.location.href = 'perfil.html';
}

// registro.js

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const clave = document.getElementById('clave').value;

    // Guardar los datos en localStorage
    localStorage.setItem('tipoUsuario', tipoUsuario);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('correo', correo);
    localStorage.setItem('clave', clave);

    // Redirigir al perfil
    window.location.href = 'perfil.html';
});

