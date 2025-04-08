import { Text, View } from "react-native";
import Login from "./(pages)/login";
import { SetStateAction, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";

import { Redirect } from "expo-router";
import Services from "./Services";


export default function Index() {
  const[userData,setUserData]=useState();
  const[isLogin,setIsLogin]=useState(false);

  useEffect(()=>{
    Services.getUserAuth().then((resp)=>{
      if(resp){
        setUserData(resp);
      }
      else{
        setUserData(null);
      }
    })
  },[])

  
  return (
   
      <AuthContext.Provider
      value={{userData,setUserData}}
      >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          {userData ? <Redirect href="/(tabs)/homepage"/> : <Login />}
          </View>
      </AuthContext.Provider>
      
  
  );
}
