/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryScreen from '../../pages/Categories';
import HomeScreen from '../../pages/Home';
import WhislistScreen from '../../pages/Whislist';

export default function Appbar() {
  const Tab = createBottomTabNavigator(); // <View style={styles.container}>

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHouse}
              style={styles.icon}
              size={25}
              color="#rgb(195,200,215)"
            />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'CategoryScreen',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faBorderAll}
              style={styles.icon}
              size={25}
              color="#rgb(195,200,215)"
            />
          ),
        }}
      />

      <Tab.Screen
        name="WhislistScreen"
        component={WhislistScreen}
        options={{
          tabBarLabel: 'WhislistScreen',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHeart}
              style={styles.icon}
              size={25}
              color="#rgb(195,200,215)"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
  },
});
