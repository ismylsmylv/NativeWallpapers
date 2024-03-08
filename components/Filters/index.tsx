/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function Filters() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.category}>for you</Text>
        {/* all */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.category}>popular</Text>
        {/* most wished */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.category}>trending</Text>
        {/* most downloaded */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#C7C7CE',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});
