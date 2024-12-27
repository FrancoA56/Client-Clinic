import { NuevaGrillaDeTurnos } from "./nuevoTurnos";
import { TurnosXEspecialidad } from "./turnosXEspecialidad";
import { TurnosXDoctor } from "./turnosXDoctor";
import { TurnosXPaciente } from "./turnosXPaciente";
import { TurnosXDia } from "./turnosXDia";

export const opcionesTurnos = [
  {
    label: "Nueva grilla",
    content: <NuevaGrillaDeTurnos />,
  },
  {
    label: "Listado de turnos x día",
    content: <TurnosXDia />,
  },
  {
    label: "Ver turnos x especialidad",
    content: <TurnosXEspecialidad />,
  },
  {
    label: "Ver Turnos x doctor",
    content: <TurnosXDoctor />,
  },
  {
    label: "Ver turnos x paciente",
    content: <TurnosXPaciente />,
  },
];
