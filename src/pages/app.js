import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function Generator() {
  const [industry, setIndustry] = useState("");
  const [work, setWork] = useState("");
  const [numberOfResults, setnumberOfResults] = useState(25);
  const [emptyIndustry, setEmptyIndustry] = useState(false);
  const [emptyWork, setEmptyWork] = useState(false);
  const [resultArray, setResultArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const doNothing = (e) => {
    e.preventDefault();
  };
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
      toast({
        title: "Number of results should be more than 0",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
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
        if (data.error) {
          return toast({
            title: "An error occurred",
            description: `${data.error}`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        setResultArray(data.split(","));
        console.log(data.split(","));
      })
      .catch((err) => {
        console.log(err.error);
      })
      .finally(() => {
        setIsLoading(false);
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

        <a href="" onClick={isLoading ? doNothing : generate}>
          {isLoading ? <Spinner size="md" /> : "Generate"}
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
        <a
          href=" "
          className="regenerate"
          onClick={isLoading ? doNothing : generate}
        >
          {isLoading ? <Spinner size="md" /> : "Regenerate"}
        </a>
      )}
    </div>
  );
}

export default Generator;
