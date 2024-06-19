const RHA_CSS = `
  .rha-alert-modal,
  .rha-confirm-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background: #000000cc;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    color: #000;
  }
  .rha-modal-box {
    min-width: 16rem;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    animation: 0.2s rha-fade-in;
  }
  .rha-modal-box .rha-button-group {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  .rha-modal-box .rha-button-group button {
    all: initial;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    border: 0.0625rem solid transparent;
  }
  .rha-modal-box .rha-button-group button:hover {
    opacity: 0.7;
  }
  .rha-modal-box .rha-button-group button.outlined {
    border-color: #000;
    background-color: #fff;
    color: #000;
  }
  .rha-alert-modal .rha-modal-box,
  .rha-confirm-modal .rha-modal-box {
    background-color: #fff;
  }
  @keyframes rha-fade-in {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes rha-fade-out {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.9);
      opacity: 0;
    }
  }
`;

// ---------------------------------------------------------------

export const insertCSS = () => {
  const isCSSInserted = document.querySelector("style[data-rha='css']");

  if (!isCSSInserted) {
    const style = document.createElement("style");
    style.dataset.rha = "css";
    style.appendChild(document.createTextNode(RHA_CSS));
    document.head.appendChild(style);
  }
};
