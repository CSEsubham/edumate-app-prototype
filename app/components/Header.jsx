import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { useContext } from 'react'

export default function Header() {
    const {userData,SetUserData}=useContext(AuthContext);
 
    return (
    <View>
      <view>
      <Text>WelCome,</Text>
      <Text style={{fontFamily:'Oswald-Bold', fontSize:20}}>{userData?.name}</Text>
      </view>
      <Image source={{uri:userData?.picture}} 
      style={{width:40,height:40,borderRadius:100}}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})