/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Appearance,
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
  setLoading,
  setopenCategory,
} from '../../redux/slice';
const colorScheme = Appearance.getColorScheme();
const ImageItem = ({img}: any) => {
  // console.log(item, 'as item image');

  const image = {uri: img + '?auto=compress&cs=tinysrgb&w=600'};
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {/* <Text>{item.title} example</Text> */}
    </ImageBackground>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Cards({datas, navigation, placeholder}: any) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.counter.selectedCategory,
  );
  const loading = useSelector(state => state.counter.loading);
  useEffect(() => {
    dispatch(setopenCategory(selectedCategory));
    // console.log(datas, 'from cards');
  }, [datas]);

  // console.log(datas);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(fetchWalls() as any);
      setRefreshing(false);
    }, 1000);
  }, []);
  // const [loading, setloading] = useState(true);

  return (
    <>
      {/* <View style={styles.loading}>
        <Text style={styles.loadingText}>loading...</Text>
      </View> */}
      {datas.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.flatContainer}
          data={datas}
          numColumns={2}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#FA2F4D']}
              progressBackgroundColor={
                colorScheme === 'dark' ? '#2B2B2B' : '#ffffff'
              }
            />
          }
          renderItem={({item}) => {
            return (
              <TouchableHighlight
                underlayColor="transparent"
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
    backgroundColor: colorScheme === 'dark' ? '#2B2B2B' : 'white',
  },
  contentContainer: {},
  placeholder: {
    color: 'transparent',
    flex: 1,
    fontSize: 40,
    marginTop: -60,
    width: windowWidth,
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorScheme === 'dark' ? '#2B2B2B' : 'white',
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
  loading: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? '#2b2b2b' : 'white',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  loadingText: {
    color: 'gray',
    // fontWeight: '600',
    marginTop: 15,
    fontFamily: 'Poppins-Regular',
  },
});
