/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

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
    title: 'Gaming',
    image:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'Sci-Fi/Fantasy',
    image: 'https://getwallpapers.com/wallpaper/full/5/8/a/533703.jpg',
  },
];

function CategoryScreen() {
  useEffect(() => {
    console.log('category mounted');
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {categories.map(elem => {
          return (
            <ImageBackground
              source={{uri: elem.image}}
              style={styles.catCard}
              key={elem.title}>
              <Text style={styles.catName}>{elem.title}</Text>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({
  container: {},
  catCard: {
    backgroundColor: 'red',
    width: '100%',
    marginVertical: 5,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catName: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
  },
});
