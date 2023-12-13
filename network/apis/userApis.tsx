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

export const searchApi = async (searchWord) => {
  try {
    const res = await axiosInstance.get(`/user/search?searchWord=${searchWord}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getUserApi = async (userId) => {
  try {
    const res = await axiosInstance.get(`/user/${userId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const delUserApi = async () => {
  try {
    const res = await axiosInstance.delete(`/user`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getUserByTokenApi = async () => {
  try {
    const res = await axiosInstance.get(`/user`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
