import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-web'
import Header from "../components/Header";
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  const {userData,setUserData}=useContext(AuthContext)
    return (
    <View style={{padding:20}}>
      <Header />
      <SearchBar />
      <Button title="LogOut" onPress={() => {Services.Logout(),setUserData(null)}} />
    </View>
  )
}

