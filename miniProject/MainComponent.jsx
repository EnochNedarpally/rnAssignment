
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from './views/Category';
import Products from './views/Products';
import AddCategory from './views/AddCategory';
import AddProduct from './views/AddProduct';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const  MainComponent =()=> {

  const HomeStack = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Category') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Products') {
          iconName = focused ? 'bag-handle' : 'bag-handle-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    // tabBarOptions={{
    //   activeTintColor: 'blue',
    //   inactiveTintColor: 'gray',
    // }}
    >
      <Tab.Screen options={{headerShown:false}} name="Category" component={Category} />
      <Tab.Screen options={{headerShown:false}} name="Products" component={Products} />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerTitle:'Category'}} name='AddCategory' component={AddCategory} />
        <Stack.Screen options={{headerTitle:'Product'}}  name='AddProduct' component={AddProduct} />
        <Stack.Screen options={{headerShown:false}} name='Home' component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainComponent