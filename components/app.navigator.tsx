/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import Detail from '../pages/Detail';
import React from 'react'; // Import React to use JSX syntax
import CategoryScreen from '../pages/Categories';
import WishlistScreen from '../pages/Whislist';

const {Navigator, Screen} = createNativeStackNavigator();

const Appnavigator = () => {
  // Make sure to return JSX
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home" options={{headerShown: true}}>
        <Screen name="home" component={HomeScreen} />
        <Screen name="detail" component={Detail} />
        <Screen name="categories" component={CategoryScreen} />
        <Screen name="wishlist" component={WishlistScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
