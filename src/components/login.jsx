import { useState } from "react";
import { useAuth } from "./authContext";
import Alert from "./alert";
import axios from "axios";

function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // Estado para el mensaje de alerta

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      if (response.status === 200) {
        // Guardar los datos del usuario al contexto
        login(response.data.user);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Ocurrió un error inesperado";
      showAlert(errorMessage);
    }
  };

  return (
    <div className="p-6 bg-crema rounded-lg shadow-md">
      {alertVisible && (
        <Alert
          message={alertMessage}
          type="error"
          isVisible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
      )}
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-verdeOs text-white py-2 px-4 rounded-lg hover:bg-verdeMe transition mt-4"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
