/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterForYou,
  filterPopular,
  filterTrending,
  setLoading,
  setactiveFilter,
} from '../../redux/slice';

export default function Filters() {
  // const count = useAppSelector(state => state.counter.value);
  // let count;
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: any) => state.counter.activeFilter);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          // dispatch(setLoading(true));
          dispatch(setactiveFilter('for you'));
          dispatch(filterForYou());
        }}>
        <Text
          style={
            activeFilter == 'for you'
              ? [styles.category, {color: '#FA2F4D'}]
              : styles.category
          }>
          for you
        </Text>
        {/* all */}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(setactiveFilter('popular'));
          dispatch(filterPopular());
        }}>
        <Text
          style={
            activeFilter == 'popular'
              ? [styles.category, {color: '#FA2F4D'}]
              : styles.category
          }>
          popular
        </Text>
        {/* most wished */}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(setactiveFilter('trending'));
          dispatch(filterTrending());
        }}>
        <Text
          style={
            activeFilter == 'trending'
              ? [styles.category, {color: '#FA2F4D'}]
              : styles.category
          }>
          trending
        </Text>
        {/* most downloaded */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  category: {
    textTransform: 'uppercase',
    color: '#C7C7CE',
    width: '100%',
    fontFamily: 'Poppins-Medium',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 20,
    width: '100%',
  },
});
