/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

export default function Header({drawerCurrent}: any) {
  const detailOpen = useSelector(state => state.counter.detailOpen);
  return (
    // !detailOpen && (
    <View
      style={
        detailOpen ? [styles.container, {display: 'none'}] : [styles.container]
      }>
      <TouchableOpacity onPress={() => drawerCurrent?.openDrawer()}>
        <FontAwesomeIcon icon={faBars} size={20} color="#7D7A8C" />
      </TouchableOpacity>
      <Text style={styles.heading}>WallVista</Text>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#7D7A8C" />
    </View>
  );
  // );
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
