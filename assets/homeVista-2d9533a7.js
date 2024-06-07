import { P as Perfil } from "./perfil-bdf9ac30.js";
import { s as supabase } from "./main-b6ccf55f.js";
class Proyecto {
  // Constructor que inicializa las propiedades del perfil
  constructor({
    id = null,
    // ID único del perfil
    created_at = null,
    // Fecha de creación del perfil
    user_id = null,
    // ID del usuario asociado al perfil
    nombre = null,
    // Nombre del usuario
    descripcion = null,
    // Apellidos del usuario
    imagen = "default_imagen.png",
    // URL del avatar por defecto
    enlace = "https://enlace.com/gestion-inventario",
    // Estado del perfil (activo/inactivo, por ejemplo)
    repositorio = "https://github.com/proyecto-gestion-inventario",
    // Rol del usuario (registrado, administrador, etc.)
    estado = "activo"
  }) {
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.enlace = enlace;
    this.repositorio = repositorio;
    this.estado = estado;
  }
  // Método estático para obtener todos los perfiles
  static async getAll() {
    const { data: proyectos, error } = await supabase.from("proyectos").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }
  // Método estático para obtener un perfil por su ID
  static async getById(id) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto[0]);
  }
  // Método estático para obtener un perfil por el ID del usuario asociado
  static async getByUserId(userId) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("user_id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto[0]);
  }
  // Método estático para crear un nuevo perfil
  static async create(proyectoData) {
    const { data, error } = await supabase.from("proyectos").insert(proyectoData).select();
    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`);
    }
    return data ? new Proyecto(data[0]) : null;
  }
  // Método estático para actualizar un perfil existente por su ID
  static async update(id, newData) {
    const { error } = await supabase.from("proyectos").update(newData).eq("id", id);
    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`);
    }
    return true;
  }
}
const homeVista = {
  template: (
    // html
    `
  <div class="container">
    <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
      Vanilla Games
    </h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
      <img src="images/logo.svg" alt="fpllefia" class="img-fluid" />
    </div>
  </div>
    `
  ),
  script: async () => {
    console.log("Vista home cargada");
    const resultado = await Perfil.getAll();
    console.log(resultado);
    const resultado1 = await Proyecto.getAll();
    console.log(resultado1);
  }
};
export {
  homeVista as default
};
