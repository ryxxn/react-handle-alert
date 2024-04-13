# react-handle-alert

`react-handle-alert`는 React 애플리케이션에서 사용자 정의 경고(alert) 및 확인(confirm) 모달을 쉽게 구현할 수 있도록 도와주는 라이브러리입니다. 이 라이브러리를 사용하면 표준 JavaScript alert 및 confirm 대화 상자 대신 스타일링이 가능한 모달을 손쉽게 추가할 수 있습니다.

## 기능

- **Custom Alerts**: 사용자에게 정보를 제공하는 커스텀 경고창을 표시합니다.
- **Custom Confirms**: 사용자의 결정을 요구하는 확인창을 구현할 수 있습니다.
- **Fully Customizable**: 모달의 배경, 스타일, 버튼 텍스트 및 버튼 스타일을 사용자 정의할 수 있습니다.

## 설치

npm을 사용하여 설치:

```bash
npm install react-handle-alert
```

yarn을 사용하여 설치:

```bash
yarn add react-handle-alert
```

## 사용법

아래는 react-handle-alert 라이브러리를 사용하는 기본적인 예제입니다:

```javascript
import { handleAlert, handleConfirm } from "react-handle-alert";

# alert
handleAlert("alert message")

# confirm
handleConfirm("confirm message").then(action => {
  console.log(action ? "confirm", "cancel");
})
```

## Custom

커스텀 훅 또는 파일을 이용해 Custom이 가능합니다.

```javascript
import { handleAlert, handleConfirm } from "react-handle-alert";

export const useModal = () => {
  const customAlert = (text: string) =>
    handleAlert(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      button: {
        text: "닫기",
        style: { backgroundColor: "blue" },
      },
    });

  const customConfirm = async (text: string) =>
    await handleConfirm(text, {
      backgroundStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      style: { backgroundColor: "white", color: "black" },
      cancelButton: {
        text: "취소",
        style: { backgroundColor: "red", border: "none", color: "white" },
      },
      confirmButton: {
        text: "확인",
        style: { backgroundColor: "green" },
      },
    });

  return { customAlert, customConfirm };
};

```

