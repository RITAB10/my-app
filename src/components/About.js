import React from "react";

export default function About(props) {
  return (
    <div className="container" data-bs-theme={props.myStyle}>
      <div className="accordion">
        <h2 className="my-3" style={{ color: props.color }}>
          About Us
        </h2>
        <details className="accordion-item" name="accordionExample" open>
          <summary className="accordion-header">
            <strong>Analyze your text</strong>
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>
          <div className="accordion-body">
            my-app gives you a way to analyze your text quickly and efficiently.
            Be it word count, character count or
          </div>
        </details>
        <details className="accordion-item" name="accordionExample">
          <summary className="accordion-header">
            <strong>Free to use</strong>
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>
          <div className="accordion-body">
            my-app is a free character counter tool that provides instatnt
            character count & word count statistics for a given text. my-app
            reports the number of words and characters. Thus it's suitable for
            writing text with word/ character limit.
          </div>
        </details>
        <details className="accordion-item" name="accordionExample">
          <summary className="accordion-header">
            <strong>Browser Compatible</strong>
            <svg
              className="accordion-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m2 5 6 6 6-6" />
            </svg>
          </summary>
          <div className="accordion-body">
            This word counter software works in any web browser such as Chrome,
            Firefox, Internet Explorer, Safari, Opera. It suits to count
            character in facebook, blog, excel document, pdf document, essays,
            etc.
          </div>
        </details>
      </div>
    </div>
  );
}
