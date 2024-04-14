# react-handle-alert

`react-handle-alert` is designed to be used as pure functions without the need for integrating any components into your React component tree. This makes it incredibly easy to trigger alerts and confirmations directly from your functional logic or event handlers.

## Example

<div align="center">
  
  ![react-handle-alert](https://github.com/ryxxn/react-handle-alert/assets/88328436/08da28ff-d058-48eb-b6b6-52b5951ba18d)
  
</div>

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

# OR
const action = await handleConfirm("confirm message");
console.log(action ? "confirm", "cancel");

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
        text: "close",
        style: { backgroundColor: "blue" },
      },
    });

  const customConfirm = async (text: string) =>
    await handleConfirm(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      cancelButton: {
        text: "cancel",
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

| Option                   | Description                                            | Type            | Default Value                                                                           |
| ------------------------ | ------------------------------------------------------ | --------------- | --------------------------------------------------------------------------------------- |
| `backgroundStyle`        | Style for the modal background                         | `CSSProperties` | `{ backgroundColor: "rgba(0, 0, 0, 0.3)" }`                                             |
| `style`                  | Style for the modal body                               | `CSSProperties` | `{ backgroundColor: "white", color: "black" }`                                          |
| `button`                 | Text and style for the default button                  | `Object`        | `{ text: "Close", style: { backgroundColor: "blue" } }`                                 |
| `cancelButton`           | Text and style for the cancel button                   | `Object`        | `{ text: "Cancel", style: { backgroundColor: "red", color: "white", border: "none" } }` |
| `confirmButton`          | Text and style for the confirm button                  | `Object`        | `{ text: "Confirm", style: { backgroundColor: "green" } }`                              |
| `closeOnBackgroundClick` | Determines if clicking the background closes the modal | `boolean`       | `true`                                                                                  |

## License

MIT © dochi.

<img width="100" height="100" alt="dochi_logo" src="https://github.com/ryxxn/react-handle-alert/assets/88328436/5bb692d4-4155-45cd-aab7-3c1978d759ef" />
