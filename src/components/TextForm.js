import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };

  const removeSpaces = () => {
    let newText = text.replaceAll(" ", "");
    setText(newText);
    props.showAlert("Removed spaces","success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Cleared all texts","success");
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const reverse = () => {
    let reverseWord = text.split(" ").reverse().join(" ");
    setText(reverseWord);
    props.showAlert("Reversed the text","success");
  };

  const capitalize = () => {
    let newText = text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
    setText(newText);
    props.showAlert("Capitalized the text","success");
  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to Clipboard","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) =>
    text.trim() ? text.trim().split(/\s+/).length : 0;

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div data-bs-theme={props.mode}>
        <h1 className="bg-dark container mb-10" style={{ color: props.color }}>
          {props.heading}
        </h1>
        <div className="form-field">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn-solid theme-warning my-5 mx-5"
          onClick={handleUpClick}
          disabled={text.length===0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn-solid theme-primary my-5 mx-5"
          onClick={handleLowClick}
          disabled={text.length===0}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn-solid theme-danger my-5 mx-5"
          onClick={removeSpaces}
          disabled={text.length===0}
        >
          Remove all spcaes
        </button>
        <button
          className="btn-solid theme-success my-5 mx-5"
          onClick={clearText}
          disabled={text.length===0}
        >
          Clear All
        </button>
        <button className="btn-solid theme-accent my-5 mx-5" onClick={speak} disabled={text.length===0}>
          Speak
        </button>
        <button className="btn-solid theme-info my-5 mx-5" onClick={reverse} disabled={text.length===0}>
          Reverse the Text
        </button>
        <button
          className="btn-solid theme-danger my-5 mx-5"
          onClick={capitalize}
          disabled={text.length===0}
        >
          Capitalize
        </button>
        <button
          className="btn-solid theme-warning my-5 mx-5"
          onClick={handleCopy}
          disabled={text.length===0}
        >
          Copy Text
        </button>
        <button
          className="btn-solid theme-accent my-5 mx-5"
          onClick={handleExtraSpaces}
          disabled={text.length===0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5">
        <h1 style={{ color: props.color }}>Your Text Summary</h1>
        <p style={{ color: props.color }}>
          Characters= {text.length}, Words= {countWords(text)}
        </p>
        <br />
        <p style={{ color: props.color }}>
          {countWords(text) * 0.008} minutes to read
        </p>
        <br />
        <p style={{ color: props.color }}>
          {countWords(text) * 0.008 * 60} seconds to read
        </p>
        <h3 style={{ color: props.color }}>Preview</h3>
        <p style={{ color: props.color }}>{text.length>0?text:'Nothing to preview!!'}</p>
      </div>
    </>
  );
}
