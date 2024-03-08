/* eslint-disable prettier/prettier */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
export default function Appbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          alert('test');
        }}>
        <FontAwesomeIcon
          icon={faHouse}
          style={styles.icon}
          size={25}
          color="#rgb(195,200,215)"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faBorderAll}
          style={styles.icon}
          size={25}
          color="#rgb(195,200,215)"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faHeart}
          style={styles.icon}
          size={25}
          color="#rgb(195,200,215)"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
    width: '100%',
    bottom: 0,
    // position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
  },
});
