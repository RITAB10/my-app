import React from "react";

export default function Alert(props) {
    const capitalize = (text) => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    return newText;
  };
  return (
    props.alert && <div className={`alert theme-${props.alert.type}`} role="alert">
        <p><strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}</p>
      </div>
  );
}
