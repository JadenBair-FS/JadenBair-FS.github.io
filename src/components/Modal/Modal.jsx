import React, { useEffect } from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, children }) {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="modal" className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <svg
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="close"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.536-13.536a1 1 0 0 1 0 1.415L13.414 12l2.122 2.121a1 1 0 1 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L10.586 12 8.464 9.879A1 1 0 1 1 9.88 8.464L12 10.586l2.121-2.122a1 1 0 0 1 1.415 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {children}
      </div>
    </div>
  );
}

export default Modal;
