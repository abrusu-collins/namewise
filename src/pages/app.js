import React, { useEffect, useState } from "react";
import nProgress, * as NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function Generator() {
  const [industry, setIndustry] = useState("");
  const [work, setWork] = useState("");
  const [numberOfResults, setnumberOfResults] = useState(25);
  const [emptyIndustry, setEmptyIndustry] = useState(false);
  const [emptyWork, setEmptyWork] = useState(false);
  const [resultArray, setResultArray] = useState([]);
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
    NProgress.start();
    // setResultArray([]);
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `I am starting a company in the ${industry} industry. 
        The function of the company is ${work}.
         Generate names I can give to the company. Strictly give me ${numberOfResults} names.
         Reply with only the names seperated by commas. Don't add anything else.
        `,
        temperature: 1,
        max_tokens: 700,
      })
      .then((res) => {
        return res;
      })
      .then((data) => {
        NProgress.done();
        setResultArray(data?.data?.choices[0]?.text.split(","));
        console.log(data.data.choices[0].text);
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
          placeholder="Company Industry"
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
        <p className="results-title">
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
