/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

function CategoryScreen() {
  useEffect(() => {
    console.log('category mounted');
  }, []);
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#818CF8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
