import { Alert } from "react-native";

const { default: AsyncStorage } = require("@react-native-async-storage/async-storage")

const setUserAuth=async()=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value));
};

const getUserAuth=async()=>{
  const value=  await AsyncStorage.getItem('userData');
  return JSON.parse(value);
};
const Logout = async () => {
  try {
    await AsyncStorage.clear();
    Alert.alert('User logged out successfully');
  } catch (error) {
    Alert.alert('Error:', error);
  }
};
export default {setUserAuth,getUserAuth,Logout};