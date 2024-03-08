/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
const image = require('../../assets/img/wallpapersden.com_new-york-minimal-digital-art_1920x1080.jpg');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '4 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-745571e29d72',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571h29d72',
    title: '6 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571229d72',
    title: '7 Item',
  },
];

const ImageItem = ({title}) => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={{color: 'white'}}>{title}</Text>
  </ImageBackground>
);
export default function Cards({style}) {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => <ImageItem title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    height: 210,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 10,
  },
  imageGrid: {
    marginTop: 20,
    marginBottom: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
