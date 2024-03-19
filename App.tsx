/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';

import Header from './components/Header';
import Appnavigator from './components/app.navigator';
import store from './redux/store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/Home';

function App(): React.JSX.Element {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  // const navigation = useNavigation();
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);
  // const detailOpen = useSelector(state => state.counter.detailOpen);
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <SafeAreaView style={styles.main}>
          <StatusBar backgroundColor={'white'} hidden={true} />
          {/* <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> */}
          <Button
            title="Open drawer"
            onPress={() => drawer.current?.openDrawer()}
          />
          <Header />
          <Appnavigator />
          {/* <View style={styles.container}> */}
          {/* <NavigationContainer>
          <Appbar navigation={navigation} />
        </NavigationContainer> */}
          {/* </View> */}
        </SafeAreaView>
      </DrawerLayoutAndroid>
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
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 16,
  // },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
