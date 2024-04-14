import React from "react";
import "./style.css";
import { ConfirmModalProps } from "../types";

export function ConfirmModal({
  text,
  onConfirm,
  onCancel,
  className = "",
  backgroundStyle = {},
  buttonGroupStyle = {},
  style = {},
  confirmButton = {},
  cancelButton = {},
}: ConfirmModalProps) {
  const bgRef = React.useRef(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === bgRef.current) {
      onCancel();
    }
  };

  return (
    <div
      className={`rha-confirm-modal ${className}`}
      ref={bgRef}
      onClick={handleClickBackground}
      style={backgroundStyle}
    >
      <div className="rha-modal-box" style={style}>
        <p>{text}</p>
        <div className="rha-button-group" style={buttonGroupStyle}>
          <button
            type="button"
            className="outlined"
            onClick={onCancel}
            style={cancelButton.style || {}}
          >
            {cancelButton.text || "Cancel"}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            style={confirmButton.style || {}}
          >
            {confirmButton.text || "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
}
