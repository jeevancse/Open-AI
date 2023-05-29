// const OpenAI = require('openai');
// console.log("===process.env.OPENAI_API_KEY",process.env.OPENAI_API_KEY)
// const openai = new  OpenAI.OpenAIApi (process.env.OPENAI_API_KEY);

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


module.exports.OpenAI = async () => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            temperature: 0,
            max_tokens: 7,
          });
          console.log(response)

        //   delay(1000)
    } catch (err) {
        console.log("=====error",err)
    }
} 


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }