import React from "react";
import "./App.css";
import { useModal } from "./hooks/useModal";
import { handleAlert, handleConfirm } from "react-handle-alert";

function App() {
  const { customAlert, customConfirm } = useModal();

  return (
    <div className="App">
      <header className="App-header">react-handle-alert Example</header>
      <main>
        <div>
          <h2>Default Alert</h2>
          <button onClick={() => handleAlert("Hello, world!")}>
            open alert
          </button>
        </div>
        <div>
          <h2>Default Confirm</h2>
          <button
            onClick={() => {
              handleConfirm("Are you sure?").then((result) => {
                console.log("Confirmed:", result);
              });
            }}
          >
            open confirm
          </button>
        </div>
        <div>
          <h2>Custom Alert</h2>
          <button onClick={() => customAlert("custom alert")}>
            open custom alert
          </button>
        </div>
        <div>
          <h2>Custom Confirm</h2>
          <button
            onClick={async () => {
              if (await customConfirm("custom confirm")) {
                customAlert("confirmed");
              }
            }}
          >
            open custom confirm
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
