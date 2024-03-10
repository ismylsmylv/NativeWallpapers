/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import Appbar from './components/Appbar';
import Header from './components/Header';
import store from './redux/store';
import HomeScreen from './pages/Home';
import CategoryScreen from './pages/Categories';
import WhislistScreen from './pages/Whislist';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor={'transparent'} hidden={true} />
        <Header />
        {/* <View style={styles.container}> */}
        <Appbar />
        {/* </View> */}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  imageGrid: {
    marginTop: 20,
    marginBottom: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  main: {
    backgroundColor: 'white',
    overflow: 'scroll',
    flex: 1,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 55,
    paddingVertical: 20,
    width: '100%',
    bottom: 0,
    // position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default App;
