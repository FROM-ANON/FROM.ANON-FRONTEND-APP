import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Replace 'YOUR_API_BASE_URL' with your actual base URL
const BASE_URL = 'YOUR_API_BASE_URL';

// Create a new instance of axios with AsyncStorage as the storage adapter
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  adapter: require('axios/lib/adapters/asyncStorage'), // Use AsyncStorage as the storage adapter
});

export const postMailApi = async ({ instaId, mailPaperId, text }) => {
  try {
    const body = {
      instaId: instaId,
      mailPaperId: mailPaperId,
      text: text,
    };
    const res = await axiosInstance.post('/mail', body);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getAllMailsApi = async () => {
  try {
    const res = await axiosInstance.get('/mail');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getAllNotReadMailsApi = async () => {
  try {
    const res = await axiosInstance.get('/mail/notread');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getMailApi = async (mailId) => {
  try {
    const res = await axiosInstance.get(`/mail/${mailId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const deleteMailApi = async (mailId) => {
  try {
    await axiosInstance.delete(`/mail/${mailId}`);
  } catch (err) {
    throw err;
  }
};

export const reportMailApi = async (mailId) => {
  try {
    await axiosInstance.post(`/mail/report/${mailId}`);
  } catch (err) {
    throw err;
  }
};
