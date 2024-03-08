/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Appbar from './components/Appbar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView></ScrollView>
      <Appbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
