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
  setDetailOpen,
  setItem,
  setopenCategory,
} from '../../redux/slice';

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
  const selectedCategory = useSelector(
    (state: any) => state.counter.selectedCategory,
  );

  useEffect(() => {
    dispatch(setopenCategory(selectedCategory));
    console.log(datas, 'from cards');
  }, []);

  console.log(datas);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchWalls() as any);
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
  },

  flatContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
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
    // fontWeight: '600',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },
});
