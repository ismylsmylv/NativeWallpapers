/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import Cards from '../../components/Cards';
import Appbar from '../../components/Appbar';
import {useNavigation} from '@react-navigation/native';

export default function WishlistScreen() {
  useEffect(() => {
    console.log('home mounted');
  }, []);
  const navigation = useNavigation();
  return (
    <View
      style={[
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
        styles.main,
      ]}>
      <Text>Wishlist</Text>
      <Cards style={styles.imageGrid} />
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
