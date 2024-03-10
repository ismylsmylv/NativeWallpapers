/* eslint-disable prettier/prettier */
import React, {Component, useEffect} from 'react';
import {Button, View, Text} from 'react-native';

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
      <Text>Contact Screen</Text>
    </View>
  );
}
