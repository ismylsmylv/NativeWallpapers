/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
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
export default function Cards({datas, navigation, placeholder}: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(datas, 'from cards');
  }, []);

  console.log(datas);

  return (
    <>
      {datas.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.flatContainer}
          data={datas}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.name + ' pressed');
                  navigation.navigate('detail');
                  dispatch(setItem(item));
                  dispatch(setDetailOpen(true));
                }}>
                <ImageItem title={item.name} img={item.img} item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={styles.placeholder}>
          <Image
            source={require('./../../assets/img/wishlist.png')}
            style={styles.placeholderImg}
          />
          <Text style={styles.placeholderText}>
            {placeholder === 'wishlist'
              ? 'No items in your wishlist yet'
              : 'You are offline'}
          </Text>
        </View>
      )}
    </>
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
  placeholder: {
    color: 'red',
    flex: 1,
    fontSize: 40,
    marginTop: -60,
    // backgroundColor: 'blue',
    height: 100,
    width: 300,
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderImg: {
    height: 100,
    width: 100,
  },
  placeholderText: {
    color: 'gray',
    fontWeight: '600',
    marginTop: 15,
  },
});
