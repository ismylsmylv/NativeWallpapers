/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Appbar from '../../components/Appbar';
import Cards from '../../components/Cards';
import {setopenCategory} from '../../redux/slice';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const colorScheme = Appearance.getColorScheme();

function OpenCategory() {
  useEffect(() => {
    console.log('open category mounted');
    console.log(selectedCategory, 'selected');
    dispatch(setopenCategory(selectedCategory));
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  const [loading, setloading] = useState(true);
  const selectedCategory = useSelector(
    (state: any) => state.counter.selectedCategory,
  );
  const openCategory = useSelector((state: any) => state.counter.openCategory);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>loading...</Text>
        </View>
      ) : (
        <Cards datas={openCategory} navigation={navigation} />
      )}

      <Appbar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
export default OpenCategory;
