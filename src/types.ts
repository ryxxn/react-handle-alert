/**
 * @description Modal Styles Options
 */
interface ModalOptions {
  backgroundStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * @description Modal Button Options
 */
interface Button {
  text?: string;
  style?: React.CSSProperties;
}

export interface ConfirmOptions extends ModalOptions {
  confirmButton?: Button;
  cancelButton?: Button;
}

export interface ConfirmModalProps extends ConfirmOptions {
  text: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface AlertOptions extends ModalOptions {
  button?: Button;
}

export interface AlertModalProps extends AlertOptions {
  text: React.ReactNode;
  onClose: () => void;
}
