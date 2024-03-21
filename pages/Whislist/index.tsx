/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Appearance, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import Appbar from '../../components/Appbar';
import Cards from '../../components/Cards';
import {fetchWishlist} from '../../redux/slice';
const colorScheme = Appearance.getColorScheme();

// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('wishlist');
//     console.log(jsonValue, 'get local');
//     return jsonValue != null ? JSON.parse(jsonValue) : [];
//   } catch (e) {
//     // error reading value
//   }
// };
// const storeData = async value => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('wishlist', jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

export default function WishlistScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('home mounted');
    // getData();
    dispatch(fetchWishlist() as any);
  }, []);
  const navigation = useNavigation();
  const wishlist = useSelector((state: any) => state.counter.wishlist);
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
        datas={wishlist.length > 0 && wishlist}
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
    backgroundColor: colorScheme === 'dark' ? '#2B2B2B' : 'white',
    overflow: 'scroll',
  },
});
