import axios from "axios";
import openai from "./botify";

const query = async (prompt: string, chatId: string, model: string) => {
  var response: BotifyResponse;
  const options = {
    method: "GET",
    url: "https://chatgpt-api9.p.rapidapi.com/ask",
    params: {
      question: prompt,
    },
    headers: {
      "X-RapidAPI-Key": "a41a7c415fmshfe3e0a12703b14cp10e0c5jsn8896b4190b89",
      "X-RapidAPI-Host": "chatgpt-api9.p.rapidapi.com",
    },
  };
  try {
    const result = await axios.request(options);
    response = result.data;
    return response.answer;
  } catch (error) {
    console.error(error);
  }
};

export default query;
