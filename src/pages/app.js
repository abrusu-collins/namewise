import React from "react";

function Generator() {
  const generate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app-page">
      <p className="app-title">Let&apos;s talk about your business</p>
      <div className="details">
        <input
          type="text"
          name="industry"
          id="industry"
          placeholder="Company Industry"
        />
        <textarea
          name="work"
          id="work"
          placeholder="Describe what your company does"
        ></textarea>

        <input
          type="number"
          name="result_number"
          id="result_number"
          placeholder="How many results do you want?"
        />

        <a href="" onClick={generate}>
          {" "}
          Generate
        </a>
      </div>
    </div>
  );
}

export default Generator;
