import { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("#000");
  const [toastMessage, setToastMessage] = useState("");

  function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  }

  const handleBgchange = () => {
    const bgColor = generateHexColor();
    setcolor(bgColor);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setToastMessage(`${color} copied`);
  };

  const handleToastClick = () => {
    setToastMessage("");
  };
  return (
    <div id='root' style={{ backgroundColor: color }}>
      <h1>Change The BAckground Color by clicking the following button</h1>
      <div className='header'>
        <input
          id='input'
          type='text'
          value={color}
          onChange={() => setcolor(generateHexColor())}
        />
        <button id='copy-btn' onClick={handleCopy}>
          copy
        </button>
      </div>
      <button id='btn' onClick={handleBgchange}>
        Change color
      </button>

      {toastMessage && (
        <div
          className='toast-message toast-message-slide-in'
          onClick={handleToastClick}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;
