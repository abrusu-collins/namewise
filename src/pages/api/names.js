// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { stringify } = require("flatted");
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  organization:process.env.NEXT_PUBLIC_OPENAI_ORG_ID
});
const openai = new OpenAIApi(configuration);
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
export default function handler(req, res) {
  if (req.method == "POST") {
    const industry = req.body.industry;
    const numberOfResults = req.body.numberOfResults;
    const work = req.body.work;
    if (!industry) {
      res.status(400).json({ error: "No industry" });
      return;
    }
    if (!work) {
      res.status(400).json({ error: "No functions" });
      return;
    }
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `I am starting a company in the ${industry} industry. 
      The function of the company is ${work}.
       Generate names I can give to the company. Strictly give me ${numberOfResults} names.
       Reply with only the names seperated by commas. Don't add anything else.
    `,
        temperature: 1,
        max_tokens: 800,
      })
      .then((res) => {
        return res;
      })
      .then((data) => {
        console.log(data.data.choices[0].text);
        res.status(200).json(data.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.status(400).json({ error: `${req.method} method is not allowed` });
  }
}
