import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://openai-api-gpt-3-5-turbo.p.rapidapi.com/api/v1/chat/completions',
  headers: {
    'x-rapidapi-key': 'f0bcc2deecmsh70f81edbbb0d5dap1536f5jsnb5b0953b7582',
    'x-rapidapi-host': 'openai-api-gpt-3-5-turbo.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    model: 'mistral-7b',
    messages: [
      {
        role: 'user',
        content: `На українській мові. Створити тему дипломної роботи, визначити мету, завдання, предмет, обʼєкт, актуальність, практичне значення, 
                    проаналізувати аналоги (2-3) та визначити потенційний стек проєкту з аргументацією вибору, 
                    відповідність 121 спеціальності. Документ повинен розкривати в цілому, ідею проекту. Може містити декілька сторінок.`
      }
    ],
    temperature: 0.5,
    top_p: 0.95,
    max_tokens: -1,
    use_cache: false,
    stream: false
  }
};

try {
	const response = await axios.request(options);
	console.log(JSON.stringify(response.data.choices[0].message.content, null, 2));
} catch (error) {
	console.error(error);
}