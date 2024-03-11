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
          <Text>{item.name}</Text>
          <View style={styles.controls}>
            <FontAwesomeIcon icon={faCircleDown} />
            <Text>Set as</Text>
            <View>
              <FontAwesomeIcon icon={faHeart} />
              {/* <FontAwesomeIcon icon={faHeart} /> */}
            </View>
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
    backgroundColor: 'red',
    left: 0,
    width: '100%',
    height: 50,
  },
  controlsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
