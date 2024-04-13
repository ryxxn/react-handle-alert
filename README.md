# react-handle-alert

`react-handle-alert` is a library designed to facilitate the implementation of custom alert and confirm modals in React applications. This library allows you to easily add styled modals instead of using standard JavaScript alert and confirm dialog boxes.

## Features

- **Custom Alerts**: Displays custom alerts that provide information to users.
- **Custom Confirms**: Enables the implementation of confirmation dialogs that require user decisions.
- **Fully Customizable**: Allows for the customization of modal backgrounds, styles, button texts, and button styles.

## Getting Started

```bash
npm install react-handle-alert

yarn add react-handle-alert
```

## Usage
Below is a basic example of how to use the react-handle-alert library:

```javascript
import { handleAlert, handleConfirm } from "react-handle-alert";

# alert
handleAlert("alert message")

# confirm
handleConfirm("confirm message").then(action => {
  console.log(action ? "confirm", "cancel");
})
```

## Customization
Customization is possible using custom hooks or files.

```javascript
import { handleAlert, handleConfirm } from "react-handle-alert";

export const useModal = () => {
  const customAlert = (text: string) =>
    handleAlert(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      button: {
        text: "close",
        style: { backgroundColor: "blue" },
      },
    });

  const customConfirm = async (text: string) =>
    await handleConfirm(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      cancelButton: {
        text: "calcel",
        style: { backgroundColor: "red", border: "none", color: "white" },
      },
      confirmButton: {
        text: "confirm",
        style: { backgroundColor: "green" },
      },
    });

  return { customAlert, customConfirm };
};

```

## Options

| Option           | Description                           | Type             | Default Value                                               |
|------------------|---------------------------------------|------------------|-------------------------------------------------------------|
| `backgroundStyle`| Style for the modal background        | `CSSProperties`  | `{ backgroundColor: "rgba(0, 0, 0, 0.3)" }`                 |
| `style`          | Style for the modal body              | `CSSProperties`  | `{ backgroundColor: "white", color: "black" }`              |
| `button`         | Text and style for the default button | `Object`         | `{ text: "Close", style: { backgroundColor: "blue" } }`     |
| `cancelButton`   | Text and style for the cancel button  | `Object`         | `{ text: "Cancel", style: { backgroundColor: "red", color: "white", border: "none" } }` |
| `confirmButton`  | Text and style for the confirm button | `Object`         | `{ text: "Confirm", style: { backgroundColor: "green" } }`  |

