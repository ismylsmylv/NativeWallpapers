/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryScreen from '../../pages/Categories';
import HomeScreen from '../../pages/Home';
import WishlistScreen from '../../pages/Whislist';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-svg';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setRoute} from '../../redux/slice';

export default function Appbar({navigation}: any) {
  const Tab = createBottomTabNavigator(); // <View style={styles.container}>
  const route = useSelector(state => state.counter.route);
  const dispatch = useDispatch();
  // const [route, setRoute] = useState('HomeScreen');
  // const navigation = useNavigation();
  return (
    // <Tab.Navigator
    //   {...{screenOptions}}
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Tab.Screen
    //     listeners={{
    //       tabPress: () => {
    //         setRoute('HomeScreen');
    //       },
    //     }}
    //     name="HomeScreen"
    //     component={HomeScreen}
    //     options={{
    //       tabBarLabel: '',
    //       tabBarIcon: () => (
    //         <FontAwesomeIcon
    //           icon={faHouse}
    //           style={styles.icon}
    //           size={25}
    //           color={route === 'HomeScreen' ? '#FF304F' : '#rgb(195,200,215)'}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     listeners={{
    //       tabPress: () => {
    //         setRoute('CategoryScreen');
    //       },
    //     }}
    //     name="CategoryScreen"
    //     component={CategoryScreen}
    //     options={{
    //       tabBarLabel: '',
    //       tabBarIcon: () => (
    //         <FontAwesomeIcon
    //           icon={faBorderAll}
    //           style={styles.icon}
    //           size={25}
    //           color={
    //             route === 'CategoryScreen' ? '#FF304F' : '#rgb(195,200,215)'
    //           }
    //         />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     listeners={{
    //       tabPress: () => {
    //         setRoute('WishlistScreen');
    //       },
    //     }}
    //     name="WishlistScreen"
    //     component={WishlistScreen}
    //     options={{
    //       tabBarLabel: '',

    //       tabBarIcon: () => (
    //         <FontAwesomeIcon
    //           icon={faHeart}
    //           style={styles.icon}
    //           size={25}
    //           color={
    //             route === 'WishlistScreen' ? '#FF304F' : '#rgb(195,200,215)'
    //           }
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    // <NavigationContainer>
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setRoute('HomeScreen'));
          navigation.navigate('home');
        }}>
        <FontAwesomeIcon
          icon={faHouse}
          style={styles.icon}
          size={25}
          color={route === 'HomeScreen' ? '#FF304F' : '#rgb(195,200,215)'}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setRoute('CategoryScreen'));
          navigation.navigate('categories');
        }}>
        <FontAwesomeIcon
          icon={faBorderAll}
          style={styles.icon}
          size={25}
          color={route === 'CategoryScreen' ? '#FF304F' : '#rgb(195,200,215)'}
        />
        <Text>categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setRoute('WishlistScreen'));
          navigation.navigate('wishlist');
        }}>
        <FontAwesomeIcon
          icon={faHeart}
          style={styles.icon}
          size={25}
          color={route === 'WishlistScreen' ? '#FF304F' : '#rgb(195,200,215)'}
        />
        <Text>Wishlist</Text>
      </TouchableOpacity>
    </View>
    // </NavigationContainer>
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
