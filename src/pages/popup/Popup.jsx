import React from "react";
import "./teampopup.css";

function Popup({ isOpen, onClose, content }) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // return () => {
//     //   document.body.style.overflow = "auto";
//     // };
//   }, [isOpen]);


  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      onClose();
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div className="Modal">
      <div className="overlay" onClick={handleOverlayClick}>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default Popup;
