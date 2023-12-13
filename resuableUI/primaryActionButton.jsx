import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import constants from '../constants/constants'
import { useNavigation } from '@react-navigation/native';

const PrimaryActionButton = ({type}) => {

const navigation = useNavigation();

const buttonType={
    AddCategory:"Add Category",
    AddProduct:"Add Product"
}
  return (
    <TouchableOpacity style={styles.addButton} onPress={({item})=>navigation.navigate(type,{data:{}})}>
            <Text style={styles.addText}>{buttonType[type]}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryActionButton

const styles=StyleSheet.create({
    addButton:{
      width:'auto',
      padding:10,
     backgroundColor:constants.mainColor,
     color:constants.fontColorLight,
      justifyContent:'center',
      alignItems:'center'
    },
    addText:{color:constants.fontColorLight,fontWeight:'bold',fontSize:16}
  })