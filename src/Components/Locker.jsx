import React from "react";
import { useState } from "react";
import "./Locker.css";

export default function Locker() {
  const [pin, setPin] = useState("");

  const handleClick = (value) => {
    setPin(pin + value);
  };

  const handleSubmit = () => {
    pin === "1234" ? alert("Success") : alert("Incorrect");
    setPin("");
  };

  return (
    <div className="parent-container">
      <h1 className="header">Locker</h1>
      <div className="locker-container">
        <p id="message" className="message">
          Incorrect
        </p>
        <input id="display" type="text" value={pin}></input>
        <div className="keys-container">
          <button className="keys" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="keys" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="keys" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="keys" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="keys" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="keys" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="keys" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="keys" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="keys" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="keys clear" onClick={() => setPin("")}>
            C
          </button>
          <button className="keys" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="keys submit" onClick={handleSubmit}>
            E
          </button>
        </div>
      </div>
    </div>
  );
}
