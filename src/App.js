import "./App.css";
import React from "react";
import ShortContent from "./components/ShortContent";

function App() {
  return (
    <div className="App">
      <div className="fl w-100 w-third-ns pa2">
        <ShortContent />
        <div className="mt2">
          <a
            href="https://github.com/AnsonLoHK/reactjs-popup-window-ad"
            className="green"
          >
            代碼網址
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
