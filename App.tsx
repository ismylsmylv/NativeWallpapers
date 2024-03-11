/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import Appbar from './components/Appbar';
import Header from './components/Header';
import store from './redux/store';
import Cards from './components/Cards';
import Detail from './pages/Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Appnavigator from './components/app.navigator';
import {useNavigation} from '@react-navigation/native';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  // const navigation = useNavigation();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor={'transparent'} hidden={true} />
        <Header />
        <Appnavigator />
        {/* <View style={styles.container}> */}
        {/* <NavigationContainer>
          <Appbar navigation={navigation} />
        </NavigationContainer> */}
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
