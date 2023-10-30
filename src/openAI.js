/*eslint-disable no_undef*/
import { OpenAI } from "openai";

export const openai = new OpenAI({
  apiKey: process.env.VITE_API_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

