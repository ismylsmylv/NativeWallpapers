/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {
  faXmark,
  faCircleInfo,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {DrawerLayoutAndroid} from 'react-native-gesture-handler';

function Drawer() {
  const navigation = useNavigation();
  const drawer = useRef<DrawerLayoutAndroid>(null);

  return (
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
      <NavigationContainer>
        <View>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              navigation.navigate('detail');
            }}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{color: '#7D7A8C', marginRight: 10}}
              size={25}
            />
            <Text style={styles.btnTexts}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btns}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{color: '#7D7A8C', marginRight: 10}}
              size={25}
            />
            <Text style={styles.btnTexts}>Exit App</Text>
          </TouchableOpacity>
        </View>
      </NavigationContainer>
    </View>
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

export default Drawer;
