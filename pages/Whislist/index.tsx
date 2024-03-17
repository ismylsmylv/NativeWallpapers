/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useSelector} from 'react-redux';
import Appbar from '../../components/Appbar';
import Cards from '../../components/Cards';

export default function WishlistScreen() {
  useEffect(() => {
    console.log('home mounted');
  }, []);
  const navigation = useNavigation();
  const wishlist = useSelector(state => state.counter.wishlist);
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
