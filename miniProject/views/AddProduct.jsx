import { useEffect, useState } from "react";
import { View,Text,TextInput,Button, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../styles";
import { addCategory, addProduct, deleteCategory, listCategory, listProducts, updateCategory, updateProduct } from "../../sagasapp/actions";
import { useNavigation, useRoute } from "@react-navigation/native";
import constants from "../../constants/constants";

const AddProduct = () => {
    const initialState={
    ProductUniqueId:0,
    ProductId:0,
    ProductName:"",
    Description:"",
    Price:0,
    CategoryId:0,
    Manufacturer:""
    }
    const [product,setProduct] = useState(initialState);
    const dispatch = useDispatch();
    const route = useRoute();
    const { data } = route.params;
    useEffect(()=>{
        if(data.product){
            setProduct(data.product)
        }
    },[data])
    const navigation=useNavigation()

     /* Dispatches Actions according to the type recieved from Parent Component*/
    const addProducts =() =>{
        
        if(data?.type=="Delete"){
            dispatch(deleteCategory(product.ProductUniqueId))
        }

        if(data?.type=="Update"){
            dispatch(updateProduct(product))
        }
        else{
            dispatch(addProduct(product))
        }
        dispatch(listProducts())
        navigation.navigate("Products")
    };
    return (
        <ScrollView style={styles.incontainer}>
            <View style={{flex:1}}>
            <Text style={styles.intext}>ProductId:</Text>
            <TextInput value={product.ProductId.toString()} style={data?.type == "Delete"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, ProductId:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>ProductName:</Text>
            <TextInput value={product.ProductName} style={data?.type == "Delete" ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, ProductName:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>Description:</Text>
            <TextInput value={product.Description} style={data?.type == "Delete"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, Description:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>Price:</Text>
            <TextInput value={product.Price.toString()} style={data?.type == "Delete" ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, Price:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>CategoryId:</Text>
            <TextInput value={product.CategoryId.toString()} style={data?.type == "Delete"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, CategoryId:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.intext}>Manufacturer:</Text>
            <TextInput value={product.Manufacturer} style={data?.type == "Delete" ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setProduct({...product, Manufacturer:text})} editable={data?.type == "Delete" ? false : true}
            />
            </View>
             <TouchableOpacity style={styles.actionButton} onPress={addProducts}>
                <Text style={styles.actionButtontxt}>
                  {data?.type ?? "Save"}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddProduct;
