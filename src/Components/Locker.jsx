import React from "react";
import { useState } from "react";
import "./Locker.css";

export default function Locker() {
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (value) => {
    setShow(false);
    setPin(pin + value);
  };

  const handleSubmit = () => {
    if (pin === "1234") {
      setMessage("success");
    } else {
      setMessage("incorrect");
    }
    setShow(true);
    setPin("");
  };

  const handleClear = () => {
    setPin("")
    setShow(false)
  }

  return (
    <div className="parent-container">
      <h1 className="header">Locker</h1>
      <div className="locker-container">
        <div className="display-container">
          {show && <p className={`display-warning ${message}`}>{message}</p>}
          <input type="text" className="display" value={pin}></input>
        </div>
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
          <button className="keys clear" onClick={handleClear}>
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
