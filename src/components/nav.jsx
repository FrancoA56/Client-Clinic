import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { opcionesTurnos } from "./Turnos";
import { opcionesRecepcion } from "./Recepcion";
import { opcionesEvolucion } from "./Evolucion";
import { opcionesFacturacion } from "./Facturacion";
import { opcionesAdmin } from "./Admin";
import { opcionesUsuario } from "./Usuario";

function Nav({ onMenuClick }) {
  return (
    <div className="px-12 fixed w-full bg-verdeOs text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between p-2 space-x-8">
        <Dropdown
          label="Turnos"
          options={opcionesTurnos}
          onMenuClick={onMenuClick}
        />
        <Dropdown
          label="Recepción"
          options={opcionesRecepcion}
          onMenuClick={onMenuClick}
        />
        <Dropdown
          label="Evolución"
          options={opcionesEvolucion}
          onMenuClick={onMenuClick}
        />
        <Dropdown
          label="Facturación"
          options={opcionesFacturacion}
          onMenuClick={onMenuClick}
        />
        <Dropdown
          label="Admin"
          options={opcionesAdmin}
          onMenuClick={onMenuClick}
        />
        <Dropdown
          label="Usuario"
          options={opcionesUsuario}
          align="right"
          onMenuClick={onMenuClick}
        />
      </nav>
    </div>
  );
}

Nav.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Nav;
