/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  Button,
  DrawerLayoutAndroid,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './components/Header';
import Appnavigator from './components/app.navigator';
import store from './redux/store';
import {
  faCircleInfo,
  faCircleXmark,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function App(): React.JSX.Element {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Check if drawer is initialized and open it after rendering
    if (drawer.current && !isDrawerOpen) {
      drawer.current.openDrawer();
      setIsDrawerOpen(true);
    }
  }, [isDrawerOpen]);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.headingTexts}>
        <Text style={styles.heading}>WallVista</Text>
        <TouchableOpacity onPress={() => drawer.current?.closeDrawer()}>
          <FontAwesomeIcon
            icon={faXmark}
            style={{color: '#7D7A8C'}}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btns}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{color: '#7D7A8C', marginRight: 10}}
            size={25}
          />
          <Text style={styles.btnTexts}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            BackHandler.exitApp();
            drawer.current?.closeDrawer();
          }}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{color: '#7D7A8C', marginRight: 10}}
            size={25}
          />
          <Text style={styles.btnTexts}>Exit App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Provider store={store}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={navigationView}>
        <SafeAreaView style={styles.main}>
          <StatusBar backgroundColor={'white'} hidden={true} />
          <Header drawerCurrent={drawer.current} />
          <Appnavigator />
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
  },
  heading: {
    color: 'black',
    fontWeight: '900',
    fontSize: 23,
  },
  headingTexts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 300,
  },
  btnTexts: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 18,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default App;
