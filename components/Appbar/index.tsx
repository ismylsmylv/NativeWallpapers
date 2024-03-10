/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import CategoryScreen from '../../pages/Categories';
import HomeScreen from '../../pages/Home';
import WhislistScreen from '../../pages/Whislist';

export default function Appbar() {
  const Tab = createBottomTabNavigator(); // <View style={styles.container}>
  const [route, setRoute] = useState('HomeScreen');
  return (
    <Tab.Navigator
      {...{screenOptions}}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        listeners={{
          tabPress: () => {
            setRoute('HomeScreen');
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHouse}
              style={styles.icon}
              size={25}
              color={route === 'HomeScreen' ? '#FF304F' : '#rgb(195,200,215)'}
            />
          ),
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: () => {
            setRoute('CategoryScreen');
          },
        }}
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faBorderAll}
              style={styles.icon}
              size={25}
              color={
                route === 'CategoryScreen' ? '#FF304F' : '#rgb(195,200,215)'
              }
            />
          ),
        }}
      />

      <Tab.Screen
        listeners={{
          tabPress: () => {
            setRoute('WhislistScreen');
          },
        }}
        name="WhislistScreen"
        component={WhislistScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHeart}
              style={styles.icon}
              size={25}
              color={
                route === 'WhislistScreen' ? '#FF304F' : '#rgb(195,200,215)'
              }
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
    margin: 10,
  },
});

const screenOptions = {
  tabBarStyle: {
    height: 90,
    margin: 30,
  },
  tabBarOptions: {
    activeTintColor: '#ffffff',
  },
  activeTintColor: 'red',
};
