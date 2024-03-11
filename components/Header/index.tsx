/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

export default function Header() {
  const detailOpen = useSelector(state => state.counter.detailOpen);
  return (
    !detailOpen && (
      <View style={styles.container}>
        <FontAwesomeIcon icon={faBars} size={20} color="#7D7A8C" />
        <Text style={styles.heading}>Wallpaper</Text>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#7D7A8C" />
      </View>
    )
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
