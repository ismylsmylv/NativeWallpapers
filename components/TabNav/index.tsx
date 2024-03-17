/* eslint-disable prettier/prettier */
// TabNav.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../pages/Home';
import CategoryScreen from '../../pages/Categories';
import WishlistScreen from '../../pages/Whislist';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
