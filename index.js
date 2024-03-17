const OpenAI = require('openai');
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

// Instantiate the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: apiKey
});

async function apiCall() {
  
    // Use the OpenAI variable to call the chat completion method
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: "Hello World" }],
      model: 'gpt-3.5-turbo',
    });

    // Log the completion choices
    console.log(chatCompletion.choices);
  
  }


apiCall();
