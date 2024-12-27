import PropTypes from "prop-types";

function Dropdown({ label, options, align = "left", onMenuClick }) {
  return (
    <div className="relative group">
      {/* Enlace principal */}
      <a href="#" className="hover:text-verdeCl">
        {label}
      </a>
      {/* Contenedor del dropdown */}
      <div
        className={`absolute ${align === "left" ? "left-0" : "right-0"} hidden w-48 bg-white text-negro rounded-md shadow-lg group-hover:block`}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onMenuClick(option.label, option.content)}
            className="block px-4 w-full py-2 rounded-md hover:bg-verdeCl hover:text-white"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  align: PropTypes.oneOf(["left", "right"]),
  onMenuClick: PropTypes.func.isRequired,
};

export default Dropdown;
