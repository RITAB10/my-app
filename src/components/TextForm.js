import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText=text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText=text.toLocaleLowerCase();
    setText(newText);
  };

  const removeSpaces=()=>{
    let newText=text.replaceAll(" ","");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value)
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="form-field">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary my-5" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-5 mx-5" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary my-5 mx-5" onClick={removeSpaces}>
        Remove all spcaes
      </button>
    </>
  );
}
