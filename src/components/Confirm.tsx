import React from "react";
import styles from "../style.module.css";
import { ConfirmModalProps } from "../types";
import { bindClassNames } from "../utils";

const cn = bindClassNames(styles);

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
  closeOnBackgroundClick = true,
}: ConfirmModalProps) {
  const bgRef = React.useRef(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackgroundClick && e.target === bgRef.current) {
      onCancel();
    }
  };

  return (
    <div
      className={cn('rha-confirm-modal', className)}
      ref={bgRef}
      onClick={handleClickBackground}
      style={backgroundStyle}
    >
      <div className={cn('rha-modal-box')} style={style}>
        {text}
        <div className={cn('rha-button-group')} style={buttonGroupStyle}>
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
