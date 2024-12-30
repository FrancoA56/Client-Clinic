import { useEffect } from "react";
import PropTypes from "prop-types";

function Alert({ message, type = "success", isVisible, onClose }) {
  // Colores según el tipo de alerta
  const alertStyles = {
    success: "bg-verdeOs text-crema",
    error: "bg-red-600 text-white",
    info: "bg-verdeCl text-negro",
  };

  // Cierra automáticamente la alerta después de 3 segundos
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } ${alertStyles[type]}`}
    >
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired, // Mensaje a mostrar
  type: PropTypes.oneOf(["success", "error", "info"]), // Tipo de alerta: éxito, error o informativa
  isVisible: PropTypes.bool.isRequired, // Si la alerta debe mostrarse
  onClose: PropTypes.func.isRequired, // Función para cerrar la alerta
};

export default Alert;
