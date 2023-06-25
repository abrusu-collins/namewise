import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function Generator() {
  const [industry, setIndustry] = useState("e-commerce");
  const [work, setWork] = useState("sell shoes");
  const [numberOfResults, setnumberOfResults] = useState(25);
  const [resultArray, setResultArray] = useState([]);
  useEffect(() => {
    if (resultArray !== []) {
      console.log(resultArray);
    }
  }, [resultArray]);
  const generate = (e) => {
    e.preventDefault();
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
        setResultArray(data?.data?.choices[0]?.text.split(","));
        console.log(data.data.choices[0].text);
      })
      .catch((err) => {
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
          onChange={(e) => {
            setIndustry(e.target.value);
          }}
        />
        <textarea
          name="work"
          id="work"
          placeholder="Describe what your company does"
          onChange={(e) => {
            setWork(e.target.value);
          }}
        ></textarea>

        <input
          type="number"
          name="result_number"
          id="result_number"
          placeholder="How many results do you want?"
          onChange={(e) => {
            setnumberOfResults(e.target.value);
          }}
        />

        <a href="" onClick={generate}>
          Generate
        </a>
      </div>
      {resultArray.length > 0 && (
        <p>These are the {numberOfResults} names you asked for</p>
      )}
      <div className="results">
        {resultArray.length > 0 &&
          resultArray.map((names) => {
            return <p key={names}>{names}</p>;
          })}
      </div>
    </div>
  );
}

export default Generator;
