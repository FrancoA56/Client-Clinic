import { ActualizarPreciosXCodigo } from "./actualizarPreciosXCodigo";
import { ActualizarPreciosXOs } from "./actualizarPreciosXOs";
import { VerFacturas } from "./verFacturas";
import { RealizarFacturas } from "./realizarFacturas";
import { ListadoPracticasXOs } from "./listadoPracticasXOs";
import { ListadoPracticasXDoctor } from "./listadoPracticasXDoctor";
import { ListadoPracticasXEspecialidad } from "./listadoPracticasXEspecialidad";

export const opcionesFacturacion = [
  {
    label: "Ver facturas",
    content: <VerFacturas />,
  },
  {
    label: "Realizar facturas",
    content: <RealizarFacturas />,
  },
  {
    label: "Listado de prácticas x OS",
    content: <ListadoPracticasXOs />,
  },
  {
    label: "Listado de prácticas x doctor",
    content: <ListadoPracticasXDoctor />,
  },
  {
    label: "Listado de prácticas x especialidad",
    content: <ListadoPracticasXEspecialidad />,
  },
  {
    label: "Actualizar precios x OS",
    content: <ActualizarPreciosXOs />,
  },
  {
    label: "Actualizar precios x Código",
    content: <ActualizarPreciosXCodigo />,
  },
];
