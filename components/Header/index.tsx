/* eslint-disable prettier/prettier */
import {faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Header() {
  const detailOpen = useSelector((state: any) => state.counter.detailOpen);
  return (
    <View
      style={
        detailOpen ? [styles.container, {display: 'none'}] : [styles.container]
      }>
      <TouchableOpacity
      // onPress={async () => {
      //   const newData = await getData();
      //   console.log(newData, 'newdata');
      // }}
      // onPress={() => drawerCurrent?.openDrawer()}
      >
        <FontAwesomeIcon icon={faBars} size={20} color="transparent" />
        {/* #7D7A8C */}
      </TouchableOpacity>
      <Text style={styles.heading}>WallVista</Text>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="transparent" />
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
