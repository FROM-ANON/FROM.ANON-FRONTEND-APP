// chatgptApis.tsx
import axios from 'axios';

const BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const gptCheckContentApi = async ({ content }: { content: string }) => {
  try {
    const body = { content: content };
    const response = await axios.post(`${BASE_URL}/chatgpt`, body);
    return response.data;
  } catch (err) {
    throw err;
  }
};
