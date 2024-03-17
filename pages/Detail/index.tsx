/* eslint-disable prettier/prettier */
import {
  faChevronLeft,
  faCircleDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addWish, removeWish, setDetailOpen} from '../../redux/slice';
// @ts-ignore
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import {useNavigation} from '@react-navigation/native';
export default function Detail() {
  const navigate = useNavigation();
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
  const wishlist = useSelector(state => state.counter.wishlist);
  const dispatch = useDispatch();
  const image = {uri: item.img};

  const callback = res => {
    console.log('Response: ', res);
  };

  const setWallpaper = async () => {
    try {
      await ManageWallpaper.setWallpaper(image, callback, TYPE.HOME);
      console.log('Wallpaper set successfully');
    } catch (error) {
      console.error('Error setting wallpaper: ', error);
    }
  };
  //added

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.controlsContainer}>
          <View style={styles.upperControlsContainer}>
            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => {
                navigate.goBack();
              }}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{color: '#ffffff'}}
                size={20}
              />
            </TouchableOpacity>
            <View style={{flex: 1}} />
          </View>
          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.controlBtn}
              onPress={() => {
                console.log(image);
              }}>
              <FontAwesomeIcon
                icon={faCircleDown}
                style={{color: 'white'}}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlSet} onPress={setWallpaper}>
              <Text style={styles.controlSetText}>Set as Wallpaper</Text>
            </TouchableOpacity>
            {!wishlist.find(elem => elem.name == item.name) ? (
              <TouchableOpacity
                style={[styles.controlBtn, {backgroundColor: '#ffffff'}]}
                onPress={() => {
                  dispatch(addWish(item));
                  console.log(item, 'added to wish');
                }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: '#FA2F4D'}}
                  size={30}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.controlBtn, {backgroundColor: '#FA2F4D'}]}
                onPress={() => {
                  dispatch(removeWish(item));
                  console.log(item, 'removed from wish');
                }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: 'white'}}
                  size={30}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    zIndex: 100,
    left: 0,
    width: '100%',
    height: 80,
    paddingHorizontal: 20,
  },
  controlsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  controlBtn: {
    borderRadius: 60,
    backgroundColor: '#FA2F4D',
    height: 50,
    width: 50,
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
  upperControlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
