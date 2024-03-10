/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Cards from '../../components/Cards';
import Filters from '../../components/Filters';
import axios from 'axios';
import {Text} from 'react-native-svg';

export default function HomeScreen() {
  const [datas, setdatas] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [dump, setdump] = useState('');
  useEffect(() => {
    console.log('home mounted');
    axios
      .get('https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers')
      .then(res => {
        setdatas(res.data);
        console.log(datas, 'from useffect');
        setloaded(true);
        setdump(JSON.stringify(datas));
      });
    // fetch('https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers')
    //   .then(resp => resp.json())
    //   .then(json => setdatas(json))
    //   .catch(error => console.error(error))
    //   .finally(() => setloaded(false));
  }, []);

  return (
    // datas.length > 0 && (

    <View
      style={[
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
        styles.main,
      ]}>
      <Filters />
      <View style={{backgroundColor: 'green', height: 40, flex: 1}}>
        <Text>test area</Text>
        <Text>{dump}</Text>
        <Text>{JSON.stringify(datas)}</Text>
      </View>
      <Button
        title="get"
        onPress={() => {
          axios
            .get('https://6565f015eb8bb4b70ef29ee3.mockapi.io/wallpapers')
            .then(res => {
              setdatas(res.data);
              console.log(datas, 'from button');
              setloaded(true);
            });
        }}
      />
      <Cards style={styles.imageGrid} datas={datas} />
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
