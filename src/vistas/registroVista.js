import { perfiles } from '../bd/datosPruebas'
import { ls } from '../componentes/funciones'
import { header } from '../componentes/header'
import { User } from '../bd/user'
import { Perfil } from '../bd/perfil'

export default {
    template: // html
    `
    

    <div class="container" >
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3 " id="formularioRegistro">

            <!-- Nombre -->
            <label for="nombre" id="nombre" class="form-label">Nombre:</label>
            <input required id="nombre" type="text" class="form-control" />
            
            <!-- Apellidos -->
            <label for="apellidos" id="apellidos" class="form-label">Apellidos:</label>
            <input id="apellidos" type="text" class="form-control" />
            
            <!-- Email -->
            <label for="email" id="email "class="form-label">Email:</label>
            <input required id="email" type="email" class="form-control" />
            
            <!-- Contraseña -->
            <label for="pass" id="pass" class="form-label mt-3">Contraseña:</label>
            <input required id="pass" type="password" min="6" class="form-control" />
            
            <!-- Botón enviar -->
            <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
          </form>
    </div>
</div>
                



    `,
    
    
    script: () => {
      console.log('Vista de registro cargada');
      
      // Validación bootstrap
      
      // Capturamos el formulario en una variable
      const formulario = document.querySelector('#formularioRegistro');
      
      // Detectamos su evento submit (enviar)
      formulario.addEventListener('submit', async (event) => {
        // Detenemos el evento enviar (submit)
        event.preventDefault();
        event.stopPropagation();
        
        // Comprobamos si el formulario no es válido
        if (!formulario.checkValidity()) {
          // Y añadimos la clase 'was-validated' para que se muestren los mensajes
          formulario.classList.add('was-validated');
        } else {
          try {
            // Capturamos datos del formulario para el registro
            const usuario = {
              email: formulario.email.value,
              password: formulario.pass.value
            };
            console.log(usuario);
            console.log('Formulario válido. Datos del formulario: ', usuario);
            
            // Intentamos crear un usuario
            const user = await User.create(usuario);
            console.log('Usuario creado', user);
          } catch (error) {
            alert('Error al crear usuario: ' + error);
            return;
          }
    
          try {
            // Capturamos datos del formulario para el perfil
            const perfil = {
              nombre: formulario.nombre.value,
              apellidos: formulario.apellidos.value
            };
            console.log(perfil);
            
            // Intentamos insertar el perfil en la base de datos
            await Perfil.create(perfil);
            
            alert('Usuario creado correctamente. Revisa tu correo electrónico...');
            window.location = '#/login';
          } catch (error) {
            alert('Error al crear perfil: ' + error);
          }
        }
      });
    }
  }    