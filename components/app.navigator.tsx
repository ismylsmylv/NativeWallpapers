/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'; // Import React to use JSX syntax
import CategoryScreen from '../pages/Categories';
import Detail from '../pages/Detail';
import HomeScreen from '../pages/Home';
import WishlistScreen from '../pages/Whislist';
import OpenCategory from '../pages/OpenCategory';
import About from '../pages/About';

const {Navigator, Screen} = createNativeStackNavigator();

const Appnavigator = () => {
  // Make sure to return JSX
  return (
    // <NavigationContainer>
    <Navigator initialRouteName="home">
      <Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen name="detail" component={Detail} options={{headerShown: false}} />
      <Screen
        name="categories"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="opencategory"
        component={OpenCategory}
        options={{headerShown: false}}
      />
      <Screen
        name="wishlist"
        component={WishlistScreen}
        options={{headerShown: false}}
      />
      <Screen name="about" component={About} options={{headerShown: false}} />
    </Navigator>
    // </NavigationContainer>
  );
};

export default Appnavigator;
