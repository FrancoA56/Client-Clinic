import Nav from "./components/nav";
import Modal from "./components/modal";
import { useState } from "react";
import { useAuth } from "./components/authContext";
import Login from "./components/login";

function App() {
  const { auth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handleMenuClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsOpen(true);
  };

  if (!auth.isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-fondoPrincipal bg-cover bg-center">
        <Login />
      </div>
    );
  }

  return (
    <div className="h-screen bg-fondoPrincipal bg-cover bg-center">
      <Nav onMenuClick={handleMenuClick} />
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
