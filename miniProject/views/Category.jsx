import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategory } from '../../sagasapp/actions';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../../resuableUI/actionButton';
import PrimaryActionButton from '../../resuableUI/primaryActionButton';
import { styles } from '../styles';

const Category = () => {

const dispatch = useDispatch();
const [categoryList, setCategoryList] = useState([])
const categoryData=useSelector(state=>state.categories);
const navigation = useNavigation();

useLayoutEffect(()=>{
  dispatch(listCategory())
},[])

useEffect(()=>{
  setCategoryList(categoryData)
},[categoryData])


// Navigate and pass the data  to the target component
const handeleUpdatePress=(data,item)=>{
  if(data.type=="Delete"){
    navigation.navigate('AddCategory',{data:{type:data.type,category:item}});
  }
  if(data.type=="Update"){
    navigation.navigate('AddCategory',{data:{type:data.type,category:item}});
  }

}

const renderItem=({item})=>(
  <View style={styles.listcontainer}>
      <Text style={styles.listtext}>{item.CategoryId}</Text>
      <Text style={styles.listtext}>{item.CategoryName}</Text>
      <Text style={styles.listtext}>{item.BasePrice}</Text>
      <View style={styles.buttons}>
        <ActionButton type="Update" handeleUpdatePress={handeleUpdatePress} item={item}/>
        <ActionButton type="Delete" handeleUpdatePress={handeleUpdatePress} item={item}/>
      </View>
  </View>
)
  return (
    <View style={styles.viewContainer}>
        <FlatList
        data={categoryList}
        keyExtractor={({ CategoryId }) => CategoryId}
        numColumns={2}
        renderItem={renderItem}
        style={styles.flatList}
        />
        <PrimaryActionButton type="AddCategory"/>
    </View>
  )
}

export default Category