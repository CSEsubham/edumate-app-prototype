import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../../assets/shared/Colors'; 


import AntDesign from '@expo/vector-icons/AntDesign';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'
import AuthContext from '../context/AuthContext';


export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken,setAccessToken]=useState(null);
  const [userInfo,setuserInfo]=useState();
  const [loading, setLoading] = useState(false);
  const{userData,setUserdata}=useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      androidClientId:"322550594413-i01utaogfj5gbqn99cri7tl0nh14ges6.apps.googleusercontent.com",
      
      expoClientId:"322550594413-utq6itsctffgqaagplv0mtka0h6n9lc0.apps.googleusercontent.com"
      
    }
  );
  useEffect(()=>{
    if(response?.type=="success"){
      setAccessToken(response.authentication.accessToken);
    }

  },[response]);

  useEffect(() => {
    if (accessToken) {
      getUserData();
    }
  }, [accessToken]);
  const getUserData=async()=>{
    try{
      setLoading(true);
      const res=await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${response.authentication.accessToken}`,
        },
      });
        const user=await res.json();
        setuserInfo(user);
        setUserdata(user);
        await Services.setUserAuth(user);
    }
    catch(error){
      Alert.alert(`Login failed ${error}`);}
   finally {
    setLoading(false);  // Stop spinner
  }
  };
 
  return (

    <View>
      <Image source={require('../../assets/images/loginImage.png')} style={styles.image}
       resizeMode='cover'
      />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome To EDUMATE</Text>
        <Text style={styles.textslog}>Your Peer. Your Guide. Your Growth</Text>
        <Text style={styles.logintext}>Login/SignIn</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>promptAsync()}
        >
        <AntDesign name="google" size={24} color="white" style={{marginRight:10}} />
          <Text style={{color:Colors.white}}>Sign in with GooGle </Text>
        </TouchableOpacity>
          
        
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    marginTop:-25,
    backgroundColor:'#eef4ed',
    borderTopRightRadius:30,
    borderTopLeftRadius:30

  },
  
  text:{
    fontSize: 35,
    fontFamily:'Oswald-Bold',
    textAlign:'center',
    color:'#0b2545'

  },
  logintext:{
    fontSize: 20,
    marginTop:80,
    textAlign:'center',
    color:'#13315c',
    fontFamily:'Oswald-SemiBold'
  },
  button:{
    backgroundColor:Colors.primary,
    padding:10,
    margin:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12.5
  },
  textslog:{
    marginTop:10,
    fontSize: 15,
    color:'#13315c',
    opacity:0.7,
     textAlign:'center'

  },
  image: {
    width: width,
    height: 400,
  },
})