/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Appbar from '../../components/Appbar';
import Cards from '../../components/Cards';
import {setopenCategory} from '../../redux/slice';

function OpenCategory() {
  useEffect(() => {
    console.log('open category mounted');
    console.log(selectedCategory, 'selected');
    dispatch(setopenCategory(selectedCategory));
  }, []);
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
      <Cards datas={openCategory} navigation={navigation} />

      <Appbar navigation={navigation} />
    </SafeAreaView>
  );
}

export default OpenCategory;
// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   catCard: {
//     backgroundColor: '#FF304F',
//     // backgroundColor: 'black',
//     width: '100%',
//     marginVertical: 5,
//     height: 150,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     resizeMode: 'cover',
//     // opacity: 0.8,
//     flexGrow: 1,
//   },
//   catName: {
//     color: 'white',
//     zIndex: 10,
//     fontSize: 30,
//     fontWeight: '800',
//   },
//   backgroundImage: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   contentContainer: {
//     flexGrow: 1,
//     paddingTop: 100,
//   },
// });
