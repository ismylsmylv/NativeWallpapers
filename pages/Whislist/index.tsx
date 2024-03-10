/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function WhislistScreen() {
  useEffect(() => {
    console.log('wishlist mounted');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 900,
        backgroundColor: 'red',
      }}>
      <Text>wishlist Screen</Text>
    </View>
  );
}
