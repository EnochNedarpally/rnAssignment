import { View, Text, FlatList,StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategory, listProducts } from '../../sagasapp/actions';
import { useNavigation } from '@react-navigation/native';
import PrimaryActionButton from '../../resuableUI/primaryActionButton';
import { styles } from '../styles';
import ActionButton from '../../resuableUI/actionButton';

const Category = () => {

const dispatch = useDispatch();
const productData=useSelector(state=>state.products);
const navigation = useNavigation();

useEffect(()=>{
  dispatch(listProducts())
},[])

// Navigate and pass the data  to the target component
const handeleUpdatePress=(data,item)=>{
  if(data.type=="Delete"){
    navigation.navigate('AddProduct',{data:{type:data.type,product:item}});
  }
  if(data.type=="Update"){
    navigation.navigate('AddProduct',{data:{type:data.type,product:item}});
  }

}

const renderItem=({item})=>(
  <View style={styles.listcontainer}>
      <Text style={styles.listtext}>{item.ProductUniqueId}</Text>
      <Text style={styles.listtext}>{item.ProductId}</Text>
      <Text style={styles.listtext}>{item.ProductName}</Text>
      <Text style={styles.listtext}>{item.Description}</Text>
      <Text style={styles.listtext}>{item.Price}</Text>
      <View style={styles.buttons}>
      <ActionButton type="Update" handeleUpdatePress={handeleUpdatePress} item={item}/>
      <ActionButton type="Delete" handeleUpdatePress={handeleUpdatePress} item={item}/>
      </View>
  </View>
)
  return (
    <View style={styles.viewContainer}>
        <FlatList
        data={productData}
        keyExtractor={({ ProductId }) => ProductId}
        numColumns={2}
        renderItem={renderItem}
        style={styles.flatList}
        />
        <PrimaryActionButton type="AddProduct"/>
        
    </View>
  )
}

export default Category