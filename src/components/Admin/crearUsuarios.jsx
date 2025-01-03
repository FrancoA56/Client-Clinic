import { useEffect, useState } from "react";
import axios from "axios";

export function CrearUsuarios() {
  const [specialties, setSpecialties] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    cuilprefix: "",
    dni: "",
    cuilpostfix: "",
    roles: "",
    doctor: false,
    nationalLicense: "",
    provincialLicense: "",
    specialty: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/specialties"
        );
        setSpecialties(data);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };
    fetchSpecialties();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password } = formData;

    // Validación básica
    if (!name || !email || !password) {
      setError("Nombre, email y contraseña son obligatorios.");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Asegúrate de tener el token almacenado
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.post("http://localhost:5000/api/users/create", formData, config);
      setSuccess("Usuario creado exitosamente.");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        password: "",
        cuilprefix: "",
        dni: "",
        cuilpostfix: "",
        roles: "",
        doctor: false,
        nationalLicense: "",
        provincialLicense: "",
        specialty: "",
      });
    } catch (error) {
      console.error("Error al crear usuario:", error);
      setError(
        error.response?.data?.message || "Ocurrió un error al crear el usuario."
      );
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el nombre"
          />
        </div>

        {/* Apellido */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el apellido"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el email"
          />
        </div>

        {/* CUIL Prefix */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            CUIL (Prefijo)
          </label>
          <input
            type="text"
            name="cuilprefix"
            value={formData.cuilprefix}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el prefijo del CUIL"
          />
        </div>

        {/* DNI */}
        <div>
          <label className="block text-sm font-medium text-gray-700">DNI</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el DNI"
          />
        </div>

        {/* CUIL Suffix */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            CUIL (Sufijo)
          </label>
          <input
            type="text"
            name="cuilpostfix"
            value={formData.cuilpostfix}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa el sufijo del CUIL"
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            placeholder="Ingresa la contraseña"
          />
        </div>

        {/* Roles */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rol</label>
          <select
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Selecciona un rol</option>
            <option value="admin">Administrador</option>
            <option value="receptionist">Recepcionista</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Doctor Toggle */}
        <div className="flex items-center justify-center">
          <label className="text-sm font-medium text-gray-700 mr-4">
            ¿Es Doctor?
          </label>
          <input
            type="checkbox"
            name="doctor"
            checked={formData.doctor}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        {formData.doctor && (
          <>
            {/* Matrícula Nacional */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Matrícula Nacional
              </label>
              <input
                type="text"
                name="nationalLicense"
                value={formData.nationalLicense}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Ingresa la matrícula nacional"
              />
            </div>

            {/* Matrícula Provincial */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Matrícula Provincial
              </label>
              <input
                type="text"
                name="provincialLicense"
                value={formData.provincialLicense}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Ingresa la matrícula provincial"
              />
            </div>

            {/* Especialidad */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Especialidad
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Selecciona una especialidad</option>
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Botón de envío */}
        <div className="col-span-3">
          <button
            type="submit"
            className="w-full bg-verdeOs text-white py-2 px-4 rounded-lg hover:bg-verdeMe transition"
          >
            Crear Usuario
          </button>
        </div>
        {/* Mensajes de éxito o error */}
        {error && (
          <div className="col-span-3 text-red-500 text-sm mt-2">{error}</div>
        )}
        {success && (
          <div className="col-span-3 text-green-500 text-sm mt-2">
            {success}
          </div>
        )}
      </form>
    </div>
  );
}
