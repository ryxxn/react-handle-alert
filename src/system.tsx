import { createRoot } from "react-dom/client";
import { AlertModal, ConfirmModal } from "./components";
import { ConfirmOptions, AlertOptions } from "./types";
import styles from "./style.module.css";

const modalBoxClass = styles["rha-modal-box"];
const animationName = styles["rha-fade-out"];

const alertContainerId = "rha-alert-container";
const confirmContainerId = "rha-confirm-container";

/**
 * Remove focus from the active element
 */
const removeFocus = () => {
  const activeElement = document.activeElement as HTMLElement;
  activeElement && activeElement.blur();
};

const addFadeOutEvent = (callback: () => void) => {
  const modalBox = document.querySelector(`.${modalBoxClass}`) as HTMLElement;
  modalBox.style.animation = `${animationName} 0.1s ease`;
  modalBox.addEventListener("animationend", callback);
};

export function handleConfirm(
  text: React.ReactNode,
  options?: ConfirmOptions
): Promise<boolean> {
  return new Promise((resolve: (action: boolean) => void) => {
    const container = document.createElement("div");
    container.id = confirmContainerId;
    document.body.appendChild(container);

    const root = createRoot(container);

    function cleanup() {
      root.unmount();
      container.remove();
      document.removeEventListener("keyup", handleKeyUp);
    }

    function onConfirm() {
      resolve(true);
      addFadeOutEvent(cleanup);
    }

    function onCancel() {
      resolve(false);
      addFadeOutEvent(cleanup);
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Enter") onConfirm();
      if (e.key === "Escape") onCancel();
    }

    removeFocus();

    document.addEventListener("keyup", handleKeyUp);

    root.render(
      <ConfirmModal
        text={text}
        onConfirm={onConfirm}
        onCancel={onCancel}
        {...options}
      />
    );
  });
}

export const handleAlert = (
  text: React.ReactNode,
  options?: AlertOptions
): void => {
  const container = document.createElement("div");
  container.id = alertContainerId;
  document.body.appendChild(container);

  const root = createRoot(container);

  function cleanup() {
    root.unmount();
    container.remove();
    document.removeEventListener("keyup", handleKeyUp);
  }

  function onClose() {
    addFadeOutEvent(cleanup);
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "Escape") {
      onClose();
    }
  };

  removeFocus();

  document.addEventListener("keyup", handleKeyUp);

  root.render(
    <AlertModal
      text={text}
      onClose={() => {
        onClose();
      }}
      {...options}
    />
  );
};
