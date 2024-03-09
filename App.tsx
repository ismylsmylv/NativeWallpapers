/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Appbar from './components/Appbar';
import Header from './components/Header';
import Filters from './components/Filters';
import Cards from './components/Cards';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={'white'} />
      <Header />
      <Filters />
      <Cards style={styles.imageGrid} />
      <Appbar />
    </SafeAreaView>
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
  },
  main: {
    backgroundColor: 'white',
    overflow: 'scroll',
  },
});

export default App;
