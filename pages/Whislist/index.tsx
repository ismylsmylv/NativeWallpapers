/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useSelector} from 'react-redux';
import Appbar from '../../components/Appbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from '../../components/Cards';
let jsonValue;
const getData = async () => {
  try {
    jsonValue = await AsyncStorage.getItem('wishlist');
    console.log(jsonValue, 'get local');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
};
const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('wishlist', jsonValue);
  } catch (e) {
    // saving error
  }
};
export default function WishlistScreen() {
  useEffect(() => {
    console.log('home mounted');
    getData();
  }, []);
  const navigation = useNavigation();
  const wishlist = useSelector(state => state.counter.wishlist);
  // const wishlist = jsonValue;
  // const dispatch = useDispatch();
  return (
    <View
      style={[
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
        styles.main,
      ]}>
      <Text>Wishlist</Text>
      <Cards
        style={styles.imageGrid}
        datas={wishlist}
        navigation={navigation}
        placeholder={'wishlist'}
      />
      <Appbar navigation={navigation} />
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
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    overflow: 'scroll',
  },
});
