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

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Filters />
      <ScrollView></ScrollView>
      <Appbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
