import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import constants from '../constants/constants'

const ActionButton = ({type,handeleUpdatePress,item}) => {
  return (
    <TouchableOpacity onPress={()=>handeleUpdatePress({type},item)} style={type == "Update" ? styles.updateButton : styles.deletButton}>
            <Text style={styles.btntxt} >{type}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
    updateButton:{
        backgroundColor:'#6082B6',
        padding:5,
        borderRadius:7,
        fontSize:17,
      },
      btntxt:{
        color:constants.fontColorLight,
        fontWeight:'bold'
      },
      deletButton:{
        backgroundColor:'#e45c5c',
        padding:5,
        borderRadius:7,
        fontSize:17,
      }
})
export default ActionButton


