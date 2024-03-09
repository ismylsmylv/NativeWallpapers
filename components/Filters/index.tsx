/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {increment} from '../../redux/slice';
import {useDispatch, useSelector} from 'react-redux';

export default function Filters() {
  // const count = useAppSelector(state => state.counter.value);
  // let count;
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch({type: 'INCREMENT'})}>
        <Text style={styles.category}>for you {count}</Text>
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
