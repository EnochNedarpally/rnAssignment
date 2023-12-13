import { StyleSheet } from "react-native";
import constants from "../constants/constants";

export const styles = StyleSheet.create({
    viewContainer:{
        padding:16,
        flex:1,
        backgroundColor:constants.tint
      },
      flatList:{
        flex:1,
        marginBottom:10
      },
      viewWrapper:{
        flex:1
      },
      listcontainer:{
        borderWidth:2,
        borderColor:"white",
        padding:10,
        backgroundColor:constants.bgColor,
        borderRadius:10,
        width:200
      },
      listtext:{
        color:constants.fontColorDark,
        fontWeight:'400',
        fontSize:16
      },
      buttons:{
        flexDirection:'row',
        gap:5,
      },
    incontainer:{
        paddingHorizontal:16,
        flex:1,
        backgroundColor:constants.tint,
        height:300,
    },
    intext:{
        fontFamily:'Segoe UI',
        fontSize:17,
        fontWeight:'bold',
        color:'#6082B6',
        justifyContent:'center',
        marginTop:15,
        marginBottom:6
    },
    textInput:{
        height:50,
        fontFamily:'Times New Roman',
        fontSize:18,
        fontWeight:'bold',
        color:constants.textInptColor,
        backgroundColor:'#dbd7d28f',
        borderWidth:1,
        color:'#555555',
        marginBottom:10,
        paddingHorizontal:6,
        borderRadius:4,
    },
    disableTextInput:{
        height:50,
        fontFamily:'Times New Roman',
        fontSize:16,
        fontWeight:'bold',
        fontWeight:'bold',
        // color:'cyan',
        color:constants.fontColorDark,
        backgroundColor:constants.disabledTextInput,
        borderRadius:10,
    },
    actionButton:{
        width:'auto',
        padding:10,
       backgroundColor:constants.mainColor,
       color:constants.fontColorLight,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:6
      },
      actionButtontxt:{
        color:constants.fontColorLight,
        fontWeight:'bold',
        fontSize:16
    }
})