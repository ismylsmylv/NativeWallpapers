/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setDetailOpen} from '../../redux/slice';
import {faCircleDown, faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

export default function Detail() {
  useEffect(() => {
    const backAction = () => {
      console.log('true');
      dispatch(setDetailOpen(false));
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const item = useSelector(state => state.counter.openItem);
  const dispatch = useDispatch();
  const image = {uri: item.img};
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.controlsContainer}>
          <View />
          {/* <Text>{item.name}</Text> */}
          <View style={styles.controls}>
            <TouchableOpacity style={styles.controlBtn}>
              <FontAwesomeIcon
                icon={faCircleDown}
                style={{color: 'white'}}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlSet}>
              <Text style={styles.controlSetText}>Set as</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlBtn, styles.controlBtnWhite]}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{color: '#FA2F4D'}}
                size={30}
              />
              {/* <FontAwesomeIcon icon={faHeart} /> */}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // height: 200,
    flex: 1,
    // width: 100,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    // flex: 1,
    // position: 'absolute',
    // bottom: 20,
    zIndex: 100,
    // backgroundColor: 'red',
    left: 0,
    width: '100%',
    height: 80,
    paddingHorizontal: 30,
  },
  controlsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  controlBtn: {
    borderRadius: 60,
    backgroundColor: '#FA2F4D',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBtnWhite: {
    backgroundColor: '#ffffff',
  },
  controlSet: {
    backgroundColor: '#FA2F4D',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
  },
  controlSetText: {
    color: '#ffffff',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
