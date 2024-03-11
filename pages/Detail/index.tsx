/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setDetailOpen} from '../../redux/slice';

export default function Detail() {
  useEffect(() => {
    const backAction = () => {
      console.log('true');
      dispatch(setDetailOpen(false));
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const item = useSelector(state => state.counter.openItem);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // height: 200,
    flex: 1,
    // width: 100,
    backgroundColor: 'red',
  },
});
