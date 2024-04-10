import React from "react";
import "./style.css";
import { ConfirmModalProps } from "../types";

export function ConfirmModal({
  text,
  onConfirm,
  onCancel,
  className = "",
  backgroundStyle = {},
  style = {},
  confirmButton = {
    text: "Ok",
    style: {},
  },
  cancelButton = {
    text: "Cancel",
    style: {},
  },
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
        <div className="rha-button-group">
          <button
            type="button"
            className="outlined"
            onClick={onCancel}
            style={cancelButton.style}
          >
            {cancelButton.text}
          </button>
          <button type="button" onClick={onConfirm} style={confirmButton.style}>
            {confirmButton.text}
          </button>
        </div>
      </div>
    </div>
  );
}
