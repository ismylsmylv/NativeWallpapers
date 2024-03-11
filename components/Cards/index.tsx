/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {setDetailOpen, setItem} from '../../redux/slice';

const ImageItem = ({img, item}: any) => {
  console.log(item, 'as item image');

  const image = {uri: img};
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>{item.title} example</Text>
    </ImageBackground>
  );
};
export default function Cards({datas, navigation}: any) {
  const dispatch = useDispatch();
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
        return (
          <TouchableOpacity
            onPress={() => {
              console.log(item.name + ' pressed');
              dispatch(setItem(item));
              dispatch(setDetailOpen(true));
              navigation.navigate('detail');
            }}>
            <ImageItem title={item.name} img={item.img} item={item} />
          </TouchableOpacity>
        );
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
