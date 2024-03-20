/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchWalls,
  getLocal,
  setDetailOpen,
  setItem,
  setopenCategory,
} from '../../redux/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('wishlist', jsonValue);
  } catch (e) {
    // saving error
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('wishlist');
    console.log(jsonValue, 'get local');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
};
const ImageItem = ({img, item}: any) => {
  console.log(item, 'as item image');

  const image = {uri: img};
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text>{item.title} example</Text> */}
    </ImageBackground>
  );
};
const windowWidth = Dimensions.get('window').width;
export default function Cards({datas, navigation, placeholder}: any) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.counter.selectedCategory);

  useEffect(() => {
    dispatch(setopenCategory(selectedCategory));
    getLocal();
    console.log(datas, 'from cards');
  }, []);

  console.log(datas);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchWalls());
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <>
      {datas.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.flatContainer}
          data={datas}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => {
            return (
              <TouchableHighlight
                underlayColor="white"
                onPress={() => {
                  console.log(item.name + ' pressed');
                  navigation.navigate('detail');
                  dispatch(setItem(item));
                  dispatch(setDetailOpen(true));
                }}>
                <ImageItem title={item.name} img={item.img} item={item} />
              </TouchableHighlight>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={styles.placeholder}>
          {placeholder == 'wishlist' && (
            <Image
              source={require('./../../assets/img/wishlist.png')}
              style={styles.placeholderImg}
            />
          )}

          <Text style={styles.placeholderText}>
            {placeholder === 'wishlist'
              ? 'No items in your wishlist yet'
              : 'Nothing to show here'}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: (windowWidth / 2 - 20) * 1.5,
    width: windowWidth / 2 - 20,
    borderRadius: 10,
    borderWidth: 0,
    overflow: 'hidden',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    // backgroundColor: 'red',
  },
  // imageGrid: {
  //   marginTop: 20,
  //   marginBottom: 150,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexWrap: 'wrap',
  //   gap: 20,
  // },
  flatContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    // gap: 10,
    alignItems: 'flex-start',
    flexGrow: 0,
    width: windowWidth,
    paddingBottom: 90,
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
