/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Appbar from '../../components/Appbar';
import {setselectedCategory} from '../../redux/slice';
const colorScheme = Appearance.getColorScheme();

const categories = [
  {
    title: 'Nature',
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=sph',
  },
  {
    title: 'Abstract',
    image:
      'https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg',
  },
  {
    title: 'Minimalist',
    image:
      'https://wallpapers.com/images/featured/minimalist-7xpryajznty61ra3.jpg',
  },
  {
    title: 'Photography',
    image:
      'https://images.unsplash.com/photo-1535540878298-a155c6d065ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvfGVufDB8fDB8fHww',
  },
  {
    title: 'Illustration',
    image:
      'https://img.freepik.com/premium-photo/mountain-with-idyllic-scene-illustration-generative-ai_846485-29545.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709942400&semt=ais',
  },
  {
    title: 'Typography',
    image:
      'https://rukminim2.flixcart.com/image/850/1000/jqmnv680/poster/h/k/h/medium-pwl-collage-typography-black-white-word-wall-poster-13-19-original-imaek7ueygazcrkw.jpeg?q=20&crop=false',
  },
  {
    title: 'Vintage',
    image:
      'https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?cs=srgb&dl=pexels-pixabay-247929.jpg&fm=jpg',
  },
  {
    title: 'Tech',
    image:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  // {
  //   title: 'Sci-Fi/Fantasy',
  //   image: 'https://getwallpapers.com/wallpaper/full/5/8/a/533703.jpg',
  // },
];

function CategoryScreen() {
  useEffect(() => {
    console.log('category mounted');
  }, []);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView style={[styles.container, {marginBottom: 80}]}>
        {categories.map(elem => {
          return (
            // <ImageBackground
            //   source={{uri: elem.image}}
            //   style={styles.catCard}
            //   key={elem.title}>
            //   <Text style={styles.catName}>{elem.title}</Text>
            // </ImageBackground>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                console.log(elem.title, 'clicked');
                dispatch(setselectedCategory(elem.title));
                navigation.navigate('opencategory');
              }}
              style={styles.container}
              key={elem.title}>
              <Image
                source={{
                  uri: elem.image,
                }}
                style={styles.backgroundImage}
              />
              <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.catName}>{elem.title}</Text>
              </ScrollView>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Appbar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: colorScheme === 'dark' ? '#2B2B2B' : 'white',
  },
  catCard: {
    backgroundColor: '#FF304F',
    // backgroundColor: 'black',
    width: '100%',
    marginVertical: 5,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    // opacity: 0.8,
    flexGrow: 1,
  },
  catName: {
    color: 'white',
    zIndex: 10,
    fontSize: 30,
    // fontWeight: '800',
    padding: 10,
    fontFamily: 'Poppins-Medium',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 100,
  },
});
