import React from "react";
import "../react-handle-alert.css";
import { AlertModalProps } from "../types";

export function AlertModal({
  text,
  onClose,
  backgroundStyle = {},
  buttonGroupStyle = {},
  style = {},
  className = "",
  button = {},
  closeOnBackgroundClick = true,
}: AlertModalProps) {
  const bgRef = React.useRef(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackgroundClick && e.target === bgRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={`rha-alert-modal ${className}`}
      ref={bgRef}
      onClick={handleClickBackground}
      style={backgroundStyle}
    >
      <div className="rha-modal-box" style={style}>
        {text}
        <div className="rha-button-group" style={buttonGroupStyle}>
          <button type="button" onClick={onClose} style={button.style || {}}>
            {button.text || "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
}
