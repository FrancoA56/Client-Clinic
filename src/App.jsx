import Nav from "./components/nav";
import Modal from "./components/modal"
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handleMenuClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <div className="h-screen bg-fondoPrincipal bg-cover bg-center">
      <Nav onMenuClick={handleMenuClick}/>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={modalTitle}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default App;
