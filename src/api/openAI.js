import axios from 'axios';
const {apiKey} = require('../constants');

const client = axios.create({
  headers: {
    Authorization: `Bearer ${apiKey}`, // Asegúrate de que haya un espacio después de "Bearer"
    'Content-Type': 'application/json',
  },
});

const chatGptEndPoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndPoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
  try {
    const res = await client.post(chatGptEndPoint, {
      model: 'gpt-3.5-turbo-0125',
      messages: [
        {
          role: 'user',
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt}. Simply answer with a yes or no.`,
        },
      ],
    });

    // console.log('data: ', res.data.choices[0].message);
    let isArt = res.data?.choices[0]?.message?.content;
    if (isArt.toLoweCase().includes('yes')) {
      console.log('dalle api call');
      return dalleApiCall(prompt, messages || []);
    } else {
      console.log('chatgpt api call');
      return chatgptApiCall(prompt, messages || []);
    }
  } catch (error) {
    console.log('error ', error);
    return Promise.resolve({success: false, msg: error.messages});
  }
};

const chatgptApiCall = async (prompt, messages) => {
  try {
    const res = await client.post(chatGptEndPoint, {
      model: 'gpt-3.5-turbo-0125',
      messages,
    });
    let answer = res.data?.choices[0]?.message?.content;
    messages.push({role: 'assistant', content: answer.trim()});
    return Promise.resolve({success: true, data: messages});
  } catch (error) {
    console.log('error ', error);
    return Promise.resolve({success: false, msg: error.messages});
  }
};

const dalleApiCall = async (prompt, messages) => {
  try {
    const res = await client.post(dalleEndPoint, {
      prompt,
      n: 1,
      size: '512x512',
    });

    let url = res?.data?.data[0]?.url;
    console.log('got url of the image: ', url);
    messages.push({role: 'assistant', content: url});
  } catch (error) {
    console.log('error ', error);
    return Promise.resolve({success: false, msg: error.messages});
  }
};
