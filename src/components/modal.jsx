import PropTypes from "prop-types";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-negro bg-opacity-50 ">
      {/* Contenedor del modal */}
      <div className="bg-crema rounded-lg shadow-xl w-full p-6 mx-32 relative border-2 border-verdeMe">
        {/* Título del modal */}
        {title && (
          <h2 className="text-2xl font-bold text-verdeOs mb-4 text-center border-b border-verdeCl pb-2">
            {title}
          </h2>
        )}
        {/* Contenido dinámico */}
        <div className="text-negro text-sm">{children}</div>
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-negro hover:text-verdeMe text-xl transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
