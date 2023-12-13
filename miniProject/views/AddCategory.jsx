import { useEffect, useState } from "react";
import { View,Text,TextInput,Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addCategory, deleteCategory, listCategory, updateCategory } from "../../sagasapp/actions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../styles";

const AddCategory = () => {
    const [category,setCategory] = useState({CategoryId:'0', CategoryName:'',BasePrice:'0'});
    const dispatch = useDispatch();
    const route = useRoute();
    const { data } = route.params;
    useEffect(()=>{
        if(data.category){
            setCategory(data.category)
        }
    },[data])
    const navigation=useNavigation()

    /* Dispatches Actions according to the type recieved from Parent Component*/
    const addProductData =() =>{
        if(data?.type=="Delete"){
            dispatch(deleteCategory(category.CategoryId))
            dispatch(listCategory())
        }

        if(data?.type=="Update"){
            dispatch(updateCategory(category))
            dispatch(listCategory())
        }
        else{

            dispatch(addCategory(category))
            dispatch(listCategory())
        }
        dispatch(listCategory())
        navigation.navigate("Category")
    };
    return (
        <View style={styles.incontainer}>
            <Text style={styles.intext}>Category Id:</Text>
            <TextInput value={category.CategoryId.toString()} style={data?.type == "Delete" || data?.type == "Update"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryId:text})} editable={data?.type == "Delete" ? false : true} 
            />
              <Text style={styles.intext}>Category Name:</Text>
            <TextInput value={category.CategoryName.toString()} style={data?.type == "Delete"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryName:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>Base Price:</Text>
            <TextInput value={category.BasePrice.toString()} style={data?.type == "Delete" ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, BasePrice:text})} editable={data?.type == "Delete" ? false : true}
            />
            <TouchableOpacity style={styles.actionButton} onPress={addProductData}>
                <Text style={styles.actionButtontxt}>
                  {data?.type ?? "Save"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddCategory;

