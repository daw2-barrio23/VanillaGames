// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'
// Archivo funcionando
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  // Ejecutamos la lógica de la vista
  vista.script()
}
cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()