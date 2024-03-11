/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Cards from '../../components/Cards';
import Filters from '../../components/Filters';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchWalls} from '../../redux/slice';
import Detail from '../Detail';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Appbar from '../../components/Appbar';

export default function HomeScreen() {
  const [datas, setdatas] = useState([]);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    console.log('home mounted');
    // axios
    //   .get('https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers')
    //   .then(res => {
    //     setdatas(res.data);
    //     console.log(datas, 'from useffect');
    //     setloaded(true);
    //   });
    dispatch(fetchWalls());
  }, []);
  const wallpapers = useAppSelector(state => state.counter.wallpapers);
  const dispatch = useAppDispatch();
  const Stack = createNativeStackNavigator();
  // const navigation = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    // datas.length > 0 && (
    <View
      style={[
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
        styles.main,
      ]}>
      <Filters />
      <Cards
        style={styles.imageGrid}
        datas={wallpapers}
        navigation={navigation}
      />
      <Appbar navigation={navigation} />
    </View>
  );
  // );
}

const styles = StyleSheet.create({
  imageGrid: {
    marginTop: 20,
    marginBottom: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    overflow: 'scroll',
  },
});
