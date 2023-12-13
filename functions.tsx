import axios from "axios";
import { Alert } from "react-native";
import { getUserByTokenApi } from "network/apis/userApis";

export const handleError = (err: any) => {
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    if (status !== undefined) {
      console.log("Axios err:", err.response?.status);

      switch (status) {
        case 500:
          Alert.alert("알 수 없는 오류가 발생했습니다.");
          break;
        case 403:
          Alert.alert("권한이 없습니다.");
          break;
        case 406:
          return status;
        default:
          return status;
      }
    }
  } else {
    console.log("Non-Axios error:", err);
  }
};

export const checkIsLogin = async () => {
  try {
    await getUserByTokenApi();
    // 유저가 로그인한 상태
    return true;
  } catch (err) {
    return false;
  }
};

export const handleUnauthorizedAccess = () => {
  Alert.alert("로그인 후 접근 가능한 페이지입니다.");
  // React Navigation을 사용하여 페이지 이동
  // 예: navigation.navigate("Main");
};
