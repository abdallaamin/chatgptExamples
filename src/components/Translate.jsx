import React from "react";

//{ doStuff, setInput,  }
//
export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="page-container">
      <textarea
        className="text-area"
        cols={50}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br></br>
      <button className="action-btn" onClick={doStuff}>
        DO YOUR STUFF!
      </button>
      <h3 className="result-text">{result}</h3>
    </div>
  );
}