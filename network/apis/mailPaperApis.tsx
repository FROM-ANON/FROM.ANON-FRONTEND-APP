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

export const getAllMailPapersApi = async () => {
  try {
    const res = await axiosInstance.get('/mailpaper');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getMailPaperApi = async (mailpaperId) => {
  try {
    const res = await axiosInstance.get(`/mailpaper/${mailpaperId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getAllFavoriteMailPapersApi = async () => {
  try {
    const res = await axiosInstance.get('/mailpaper/favorite');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const postFavoriteMailPaperApi = async (mailPaperId) => {
  try {
    const res = await axiosInstance.post(`/mailpaper/favorite/${mailPaperId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const delFavoriteMailPaperApi = async (fmpId) => {
  try {
    const res = await axiosInstance.delete(`/mailpaper/favorite/${fmpId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
