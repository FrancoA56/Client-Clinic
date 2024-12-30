import { useState } from "react";
import Alert from "../alert";

export function AplicarPermisos() {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  return (
    <div>
      <button
        onClick={showAlert}
        className="bg-verdeOs text-crema px-4 py-2 rounded hover:bg-verdeMe transition-transform transform ease-in-out"
      >
        Mostrar Alerta
      </button>

      <Alert
        message="¡Operación realizada con éxito!"
        type="success"
        isVisible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </div>
  );
}