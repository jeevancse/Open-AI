require('dotenv').config()
const express = require('express');
const OpenAI = require('./config/openai');
const OpenAiApp = express();

(async ( ) => {
await OpenAI.OpenAI()
})();

OpenAiApp.listen(3000, () => {
    console.log("Open AI app is listening At",3000)
})