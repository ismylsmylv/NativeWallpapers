/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faBars} size={20} color="#7D7A8C" />
      <Text style={styles.heading}>Wallpaper</Text>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#7D7A8C" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  heading: {
    color: '#1B1738',
    fontWeight: '600',
    fontSize: 23,
  },
});
