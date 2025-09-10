document.addEventListener("DOMContentLoaded", () => {
    const tipoUsuario = document.getElementById("tipoUsuario");
    const extraCampos = document.getElementById("extraCampos");
    const form = document.getElementById("registroForm");
    const mensajeError = document.getElementById("mensaje-error");

    tipoUsuario.addEventListener("change", () => {
        extraCampos.innerHTML = "";

        if (tipoUsuario.value === "cliente") {
            extraCampos.innerHTML = `
                <input type="text" id="organizacion" placeholder="Organización/Empresa" required>
            `;
        } 
        else if (tipoUsuario.value === "admin") {
            extraCampos.innerHTML = `
                <input type="text" id="organizacion" placeholder="Organización/Empresa" required>
                <input type="password" id="claveAdmin" placeholder="Clave de administrador" required>
            `;
        } 
        else if (tipoUsuario.value === "tecnico") {
            extraCampos.innerHTML = `
                <input type="text" id="organizacion" placeholder="Organización/Empresa" required>
                <input type="text" id="departamento" placeholder="Departamento" required>
                <input type="password" id="claveTecnico" placeholder="Clave de técnico" required>
            `;
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        mensajeError.style.display = "none";
        mensajeError.classList.remove("shake");

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const clave = document.getElementById("clave").value.trim();

        if (!nombre || !correo || !clave || !tipoUsuario.value) {
            mostrarError("Por favor, completa todos los campos.");
            return;
        }

        if (tipoUsuario.value === "admin" && document.getElementById("claveAdmin").value !== "admin123") {
            mostrarError("Clave de administrador incorrecta.");
            return;
        }

        if (tipoUsuario.value === "tecnico" && document.getElementById("claveTecnico").value !== "tec123") {
            mostrarError("Clave de técnico incorrecta.");
            return;
        }

        alert(`Registro exitoso para: ${tipoUsuario.value}`);
        form.reset();
        extraCampos.innerHTML = "";
    });

    function mostrarError(msg) {
        mensajeError.textContent = msg;
        mensajeError.style.display = "block";
        mensajeError.classList.add("shake");
    }
});
