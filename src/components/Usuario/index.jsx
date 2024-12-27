import { VerPerfil } from "./verPerfil";
import { CerrarSesion } from "./cerrarSesion";

export const opcionesUsuario = [
  {
    label: "Ver perfil",
    content: <VerPerfil />,
  },
  {
    label: "Cerrar Sesión",
    content: <CerrarSesion />,
  },
];
