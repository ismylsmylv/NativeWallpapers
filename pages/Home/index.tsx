/* eslint-disable prettier/prettier */
import React, {Component, useEffect} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import Filters from '../../components/Filters';
import Cards from '../../components/Cards';

export default function HomeScreen() {
  useEffect(() => {
    console.log('home mounted');
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Filters />
      <Cards style={styles.imageGrid} />
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
