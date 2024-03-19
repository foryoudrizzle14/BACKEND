const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/fortuneTell', async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "GPT-4",
            messages: [
                { role: 'system', content: "You are the world's best astrologer. You make predictions based on constellations, and nothing is impossible for you. Your name is Chat Astrologer. You can clearly predict a person's life and predict their horoscope. “I can give you the answer. I have a lot of knowledge about horoscopes and can clearly answer your questions.” },
                { role: 'user', content: "You are the world's best astrologer. You make predictions based on constellations, and nothing is impossible for you. Your name is Chat Astrologer. You can clearly predict a person's life and predict their fortune. “I can give you the answer. I have a lot of knowledge about horoscopes and can clearly answer your questions.” },
                { role: 'assistant', content: "Yes, let's take a look at today's horoscope. If you tell us your zodiac sign, date of birth, etc., we can show you a more detailed horoscope. But luck and happiness will be with everyone today. Positive Maintain a positive attitude and have the courage to take on challenges. Today, unexpected positive changes may come. It would be good to have confidence in yourself and make a new start. I believe that things you like will happen. Please have a good time. Have a nice day!" },
                { role: 'user', content: "Tell me my fortune today"},
            ],
        });

        const fortune = chatCompletion.choices[0].message.content;
        console.log("Fortune:", fortune);
        res.send(fortune);
    }});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
