import { CrearUsuarios } from "./crearUsuarios";
import { CrearPermisos } from "./crearPermisos";
import { AplicarPermisos } from "./aplicarPermisos";
import { EliminarPermisos } from "./eliminarPermisos";
import { EliminarUsuarios } from "./eliminarUsuarios";

export const opcionesAdmin = [
  {
    label: "Crear usuarios",
    content: <CrearUsuarios />,
  },
  {
    label: "Crear permisos",
    content: <CrearPermisos />,
  },
  {
    label: "Aplicar permisos",
    content: <AplicarPermisos />,
  },
  {
    label: "Eliminar permisos",
    content: <EliminarPermisos />,
  },
  {
    label: "Eliminar usuarios",
    content: <EliminarUsuarios />,
  },
];
