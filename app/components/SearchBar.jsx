import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-web';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="gray" style={{marginRight:10}} />
      <TextInput placeholder='search'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        elevation:2,
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:10
    }
})