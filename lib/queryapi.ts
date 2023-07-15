import axios from "axios";
import openai from "./botify";

const query = async (prompt: string, chatId: string, model: string) => {
  var response: BotifyResponse;
  const options = {
    method: "GET",
    url: process.env.COMMUNICATE,
    params: {
      question: prompt,
    },
    headers: {
      "X-RapidAPI-Key": process.env.R_A_K,
      "X-RapidAPI-Host": process.env.COMUNICATION_L,
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
