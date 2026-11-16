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

  const clearText = () => {
    setText("");
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const reverse = () => {
    let reverseWord = text.split(" ").reverse().join(" ");
    setText(reverseWord);
  };

  const capitalize = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) =>
    text.trim() ? text.trim().split(" ").length : 0;

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div data-bs-theme={props.mode}>
        <h1 className="bg-dark container" style={{ color: props.color }}>
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
        >
          Convert to Uppercase
        </button>
        <button
          className="btn-solid theme-primary my-5 mx-5"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn-solid theme-danger my-5 mx-5"
          onClick={removeSpaces}
        >
          Remove all spcaes
        </button>
        <button
          className="btn-solid theme-success my-5 mx-5"
          onClick={clearText}
        >
          Clear All
        </button>
        <button className="btn-solid theme-accent my-5 mx-5" onClick={speak}>
          Speak
        </button>
        <button className="btn-solid theme-info my-5 mx-5" onClick={reverse}>
          Reverse the Text
        </button>
        <button
          className="btn-solid theme-danger my-5 mx-5"
          onClick={capitalize}
        >
          Capitalize
        </button>
        <button
          className="btn-solid theme-warning my-5 mx-5"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn-solid theme-accent my-5 mx-5"
          onClick={handleExtraSpaces}
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
        <p style={{ color: props.color }}>{text}</p>
      </div>
    </>
  );
}
