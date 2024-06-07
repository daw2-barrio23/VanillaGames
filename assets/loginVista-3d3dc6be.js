import { U as User, l as ls, h as header } from "./main-b6ccf55f.js";
import { P as Perfil } from "./perfil-bdf9ac30.js";
const loginVista = {
  // Archivo funcionando
  template: (
    // html
    `
    <div class="container">
      <h1 class="mt-5 text-center">Inicia sesión</h1>
      <div class="m-5 mx-auto" style="max-width: 400px">
        <!-- Formulario de inicio de sesión (login) -->
        <form id="formularioLogin" novalidate action="" class="form border shadow-sm p-3">
          <!-- Email -->
          <label for="emailLogin" class="form-label">Email:</label>
          <input id="emailLogin" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
          <div class="invalid-feedback">El formato del email no es correcto</div>
          <!-- Contraseña -->
          <label for="passLogin" class="form-label mt-3">Contraseña:</label>
          <input value="123456" id="passLogin" name="password" required minlength="6" type="password" class="form-control" />
          <div class="invalid-feedback">
            La contraseña debe tener como mínimo 6 caracteres
          </div>

          <!-- Recordar contraseña -->
          <div class="form-check mt-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Recordar sesión
            </label>
          </div>

          <!-- Link a recordar contraseña -->
          <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>

          <!-- Botón Iniciar sesión -->
          <input
            type="submit"
            class="btn btn-primary w-100 mt-3"
            value="Iniciar sesión"
          />
        </form>

        <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
          >¿Eres nuevo? Regístrate</a
        >
      </div>
    </div>
    `
  ),
  script: () => {
    console.log("vista login cargada");
    const formulario = document.querySelector("#formularioLogin");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        enviarDatos(formulario);
      }
    });
    async function enviarDatos(formulario2) {
      try {
        const user = {
          email: formulario2.email.value,
          password: formulario2.password.value
        };
        User.logout();
        const usuarioLogueado = await User.login(user);
        console.log("¡login correcto!", usuarioLogueado);
        console.log("usuarioLogueado", usuarioLogueado);
        const userId = usuarioLogueado.id;
        console.log("userId", userId);
        const perfilLogueado = await Perfil.getByUserId(userId);
        console.log("Perfil logueado", perfilLogueado);
        const usuario = {
          email: usuarioLogueado.email,
          rol: perfilLogueado.rol,
          avatar: perfilLogueado.avatar
        };
        console.log("perfil localstorage", usuario);
        ls.setUsuario(usuario);
        window.location = "#/proyectos";
        header.script();
      } catch (error) {
        console.log("Error al iniciar sesión", error);
        alert("El usuario no existe o la contraseña no es correcta", error);
      }
    }
  }
};
export {
  loginVista as default
};
