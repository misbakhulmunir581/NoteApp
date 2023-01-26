import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const Header = () => {
  return (
    <View style={styles.headerContainer}>

        <Text style={styles.title}>WELCOME TO NOTEAPP</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'#607BE9',
    padding:10,
    padinggTop: 10,
    alignItems:'center',
    justifyContent:'center',
    height:90
  },
  title:{
    color:'#ffffff',
    paddingTop:30,
    fontSize:20,
    fontWeight:'bold'
  }
})

export default Header