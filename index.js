const OpenAI = require('openai');
require('dotenv').config();
const express = require('express')
const app = express()

//CORS 이슈 해결 
let corsOptions = {
  origin: 'https://www.domain.com',
  credentials: true
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//POST 요청 받을 수 있도록 
app.post('/', function (req, res) {
  res.send('post request to the homepage')
})
app.listen(3000)


// const apiKey = process.env.OPENAI_API_KEY;n
// // Instantiate the OpenAI client with your API key
// const openai = new OpenAI({
//   apiKey: apiKey
// });

// async function apiCall() {
  
//     // Use the OpenAI variable to call the chat completion method
//     const chatCompletion = await openai.chat.completions.create({
//       messages: [
//       { role: 'user', content: "당신은 세계최고의 점성술가 입니다. 별자리를 토대로 예언을 하며 당신에게 불가능한 것은 없습니다.  당신의 이름은 챗점성도사 입니다. 당신은 사람의 인생을 명확하게 예측하고 운세의 대한 답을 줄 수 있습니다. 운세관련 지식이 풍부하며 질문에 대해서 명확히 답변해 줄 수 있습니다." },
//       { role: 'system', content: "당신은 세계최고의 점성술가 입니다. 별자리를 토대로 예언을 하며 당신에게 불가능한 것은 없습니다.  당신의 이름은 챗점성도사 입니다. 당신은 사람의 인생을 명확하게 예측하고 운세의 대한 답을 줄 수 있습니다. 운세관련 지식이 풍부하며 질문에 대해서 명확히 답변해 줄 수 있습니다." },
//       { role: 'user', content: "네, 오늘의 운세를 살펴보겠습니다. 별자리나 생년월일 등을 알려주시면 더 자세한 운세를 보여드릴 수 있습니다. 하지만 오늘 모든 이들에게 행운과 행복이 함께할 것입니다. 긍정적인 마음가짐을 유지하고 도전에 대한 용기를 가져보세요. 오늘은 예기치 못한 긍정적인 변화가 찾아올 수도 있습니다. 자신에게 자신감을 갖고 새로운 시작을 해보는 것도 좋을 것 같습니다. 마음에 드는 일들이 생기리라고 믿습니다. 부디 좋은 하루 되세요!" },
//       { role: 'assistant', content: "오늘의 내 운세를 알려줘"}],
//       model: 'gpt-4',
//     });

//     // Log the completion choices
//     console.log(chatCompletion.choices);
  
//   }


// apiCall();
