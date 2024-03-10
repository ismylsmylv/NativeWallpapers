/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';
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

const ImageItem = ({title, img, item}) => {
  console.log(item, 'as item image');

  const image = {uri: img};
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>{item.title} example</Text>
    </ImageBackground>
  );
};
export default function Cards({style, datas}) {
  useEffect(() => {
    console.log(datas, 'from cards');
  }, []);

  console.log(datas);
  return (
    <FlatList
      contentContainerStyle={styles.flatContainer}
      data={datas}
      numColumns={2}
      renderItem={({item}) => {
        console.log(item, 'as item');
        // return
        return <ImageItem title={item.name} img={item.img} item={item} />;
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}
// renderItem = ({item}) => {
//   const {items} = this.state;
//   if (items.empty === true) {
//     return <View style={[styles.item, styles.itemInvisible]} />;
//   }
//   return (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={this.deletePhoto}
//       key={item.id}>
//       <Image source={{uri: item.value}} style={{width: 400, height: 120}} />
//     </TouchableOpacity>
//   );
// };
const styles = StyleSheet.create({
  image: {
    height: 210,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 10,
    // backgroundColor: 'red',
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
    flexDirection: 'column',
    justifyContent: 'center',
    // gap: 10,
    alignItems: 'center',
    flexGrow: 0,
  },
  contentContainer: {},
});
