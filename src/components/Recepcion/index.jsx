import { RecepcionXTurnos } from "./recepcionXTurnos";
import { RecepcionXDemanda } from "./recepcionXDemanda";
import { ListadoDePracticas } from "./listadoDePracticas";
import { RecepcionXOs } from "./recepcionXOs";


export const opcionesRecepcion = [
    {
      label: "Recepción x turnos",
      content: <RecepcionXTurnos/>
    },
    {
      label: "Recepción x demanda",
      content: <RecepcionXDemanda/>
    },
    {
      label: "Recepción x OS",
      content: <RecepcionXOs/>
    },
    {
      label: "Listado de prácticas",
      content: <ListadoDePracticas/>
    },
  ];