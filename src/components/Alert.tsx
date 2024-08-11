import React from "react";
import styles from "./style.module.css";
import { AlertModalProps } from "../types";
import { bindClassNames } from "../utils";

const cn = bindClassNames(styles);

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
      className={cn('rha-alert-modal', className)}
      ref={bgRef}
      onClick={handleClickBackground}
      style={backgroundStyle}
    >
      <div className={cn("rha-modal-box")} style={style}>
        {text}
        <div className={cn("rha-button-group")} style={buttonGroupStyle}>
          <button onClick={onClose} style={button.style || {}}>
            {button.text || "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
}
