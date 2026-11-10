import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const removeSpaces = () => {
    let newText = text.replaceAll(" ", "");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords=(text)=>text.trim()? text.trim().split(" ").length:0;

  const [text, setText] = useState("");

  return (
    <>
      <div className="container bg-dark bg-gradient">
        <h1 className="bg-dark container">{props.heading}</h1>
        <div className="form-field">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn-solid theme-primary my-5 mx-5" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn-solid theme-warning my-5 mx-5" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn-solid theme-danger my-5 mx-5" onClick={removeSpaces}>
          Remove all spcaes
        </button>
      </div>
      <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>Characters= {text.length}, Words= {countWords(text)}</p><br />
        <p>{countWords(text)*0.008} minutes to read</p><br />
        <p>{countWords(text)*0.008*60} seconds to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
