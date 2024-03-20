/* eslint-disable prettier/prettier */
import {
  faChevronLeft,
  faCircleDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addWish,
  getLocal,
  removeWish,
  setDetailOpen,
  setLocal,
} from '../../redux/slice';
// @ts-ignore
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

// await RNFetchBlob.fs.mkdir(folderPath, {recursive: true});

const downloadImage = async (imageUri: string) => {
  try {
    const folderPath = `${RNFetchBlob.fs.dirs.PictureDir}/WallVista`;

    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const path = `${folderPath}/${filename}`;

    // Check if the image file already exists
    const exists = await RNFetchBlob.fs.exists(path);
    if (exists) {
      ToastAndroid.show('Image already downloaded!', ToastAndroid.SHORT);
      return; // Exit early if the image is already downloaded
    }

    // Attempt to fetch the image
    const res = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'jpg',
      path: path,
    }).fetch('GET', imageUri);
    ToastAndroid.show('Image downloaded successfully!', ToastAndroid.SHORT);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error downloading image:', error);
    ToastAndroid.show(
      'Error downloading image. Please try again.',
      ToastAndroid.SHORT,
    );
  }
};

//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
export default function Detail() {
  const navigate = useNavigation();
  useEffect(() => {
    const backAction = () => {
      console.log('true');
      dispatch(setDetailOpen(false));

      return false;
    };
    getLocal();
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
  const [wallpaperSet, setwallpaperSet] = useState(false);
  const [fakeLoading, setfakeLoading] = useState(false);
  const callback = (res: any) => {
    console.log('Response: ', res);
  };

  const setWallpaper = async () => {
    try {
      await ManageWallpaper.setWallpaper(image, callback, TYPE.HOME);
      const updatedRating = item.rating + 1;
      const obj = {
        name: item.name,
        img: item.img,
        view: item.view,
        like: item.like,
        rating: updatedRating,
        category: item.category,
      };
      axios.put(
        'https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers/' + item.id,
        obj,
      );
      console.log('Wallpaper set successfully');
    } catch (error) {
      console.error('Error setting wallpaper: ', error);
    }
  };
  //added
  const imageUri = item.img;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.controlsContainer}>
          <View style={styles.upperControlsContainer}>
            <TouchableOpacity
              style={[styles.controlBtn, {backgroundColor: 'white'}]}
              onPress={() => {
                navigate.goBack();
                dispatch(setDetailOpen(false));
              }}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{color: '#FA2F4D'}}
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
                // requestCameraPermission();
                downloadImage(imageUri);
              }}>
              <FontAwesomeIcon
                icon={faCircleDown}
                style={{color: 'white'}}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                !wallpaperSet
                  ? [styles.controlSet, {backgroundColor: '#FA2F4D'}]
                  : [styles.controlSet, {backgroundColor: '#ffffff'}]
              }
              onPress={() => {
                setWallpaper();
                setfakeLoading(true);
                setTimeout(() => {
                  setfakeLoading(false);
                  setwallpaperSet(true);
                }, 1000);
              }}>
              <Text
                style={
                  !wallpaperSet
                    ? [styles.controlSetText, {color: '#ffffff'}]
                    : [styles.controlSetText, {color: '#FA2F4D'}]
                }>
                {wallpaperSet
                  ? 'Wallpaper set'
                  : fakeLoading
                  ? 'Please wait...'
                  : 'Set as Wallpaper'}
              </Text>
            </TouchableOpacity>
            {!wishlist.find(
              (elem: {name: string}) => elem.name == item.name,
            ) ? (
              <TouchableOpacity
                style={[styles.controlBtn, {backgroundColor: '#FA2F4D'}]}
                onPress={() => {
                  dispatch(addWish(item));
                  // setLocal(item);
                  console.log(item, 'added to wish');
                }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: 'white'}}
                  size={30}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.controlBtn, {backgroundColor: '#ffffff'}]}
                onPress={() => {
                  dispatch(removeWish(item));
                  console.log(item, 'removed from wish');
                }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: '#FA2F4D'}}
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
