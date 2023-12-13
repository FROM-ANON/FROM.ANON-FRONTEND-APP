// loginApis.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const loginAndGetTokensApi = async (code: string) => {
  try {
    const body = { code: code };
    const response = await axios.post(`${BASE_URL}/login`, body);

    // Store tokens in AsyncStorage
    await AsyncStorage.setItem('accessToken', response.data.accessToken);
    await AsyncStorage.setItem('refreshToken', response.data.refreshToken);

    // 회원가입/로그인 구분
    if (response.data.isNewUser) {
      // Navigate to terms screen
      // Use your navigation logic here
    } else {
      // Navigate to main screen
      // Use your navigation logic here
    }

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle login failure
    // Use your error handling logic here
  }
};

export const signupApi = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // Handle signup failure
    // Use your error handling logic here
  }
};
