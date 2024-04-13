import { handleAlert, handleConfirm } from "react-handle-alert";

export const useModal = () => {
  const customAlert = (text: string) =>
    handleAlert(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      button: {
        text: "close!",
        style: { backgroundColor: "blue" },
      },
    });

  const customConfirm = async (text: string) =>
    await handleConfirm(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      cancelButton: {
        text: "cancel!",
        style: { backgroundColor: "red", border: "none", color: "white" },
      },
      confirmButton: {
        text: "Ok!",
        style: { backgroundColor: "green" },
      },
    });

  return { customAlert, customConfirm };
};
