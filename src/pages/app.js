import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nProgress, * as NProgress from "nprogress";
import "nprogress/nprogress.css";

function Generator() {
  const [industry, setIndustry] = useState("");
  const [work, setWork] = useState("");
  const [numberOfResults, setnumberOfResults] = useState(25);
  const [emptyIndustry, setEmptyIndustry] = useState(false);
  const [emptyWork, setEmptyWork] = useState(false);
  const [resultArray, setResultArray] = useState([]);
  const router = useRouter();
  const generate = (e) => {
    e.preventDefault();
    if (!industry) {
      setEmptyIndustry(true);
      return;
    }
    if (!work) {
      setEmptyWork(true);
      return;
    }
    if (numberOfResults < 1) {
      return;
    }
    // NProgress.start();
    fetch("http://localhost:3000/api/names", {
      method: "POST",
      body: JSON.stringify({
        industry: industry,
        work: work,
        numberOfResults: numberOfResults || 25,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        NProgress.done();
        console.log(err);
      });
  };
  return (
    <div className="app-page">
      <p className="app-title">Let&apos;s talk about your business</p>
      <div className="details">
        <input
          type="text"
          name="industry"
          id="industry"
          placeholder="Company Industry e.g Sports, Health, Tech"
          className={emptyIndustry ? "form-invalid" : ""}
          onChange={(e) => {
            setIndustry(e.target.value);
            setResultArray([]);
            setEmptyIndustry(false);
          }}
        />
        <textarea
          name="work"
          id="work"
          placeholder="Describe what your company does"
          className={emptyWork ? "form-invalid" : ""}
          onChange={(e) => {
            setWork(e.target.value);
            setResultArray([]);
            setEmptyWork(false);
          }}
        ></textarea>

        <input
          type="number"
          name="result_number"
          id="result_number"
          placeholder="How many results do you want? default is 25"
          min={1}
          onChange={(e) => {
            setnumberOfResults(e.target.value);
            setResultArray([]);
          }}
        />

        <a href="" onClick={generate}>
          Generate
        </a>
      </div>
      {resultArray.length > 0 && (
        <p className="results-title" id="results-title">
          These are the {numberOfResults} names you asked for😍
        </p>
      )}
      <div className="results">
        {resultArray.length > 0 &&
          resultArray.map((names) => {
            return <p key={names}>{names}</p>;
          })}
      </div>
      {resultArray.length > 0 && (
        <a href=" " className="regenerate" onClick={generate}>
          Regenerate
        </a>
      )}
    </div>
  );
}

export default Generator;
