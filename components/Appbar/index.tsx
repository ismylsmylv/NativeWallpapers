/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {faBorderAll, faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryScreen from '../../pages/Categories';
import WhislistScreen from '../../pages/Whislist';
import HomeScreen from '../../pages/Home';
export default function Appbar() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <FontAwesomeIcon
                  icon={faHouse}
                  style={styles.icon}
                  size={25}
                  color="#rgb(195,200,215)"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              tabBarLabel: 'Category',
              tabBarIcon: () => (
                <FontAwesomeIcon
                  icon={faBorderAll}
                  style={styles.icon}
                  size={25}
                  color="#rgb(195,200,215)"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Whislist"
            component={WhislistScreen}
            options={{
              tabBarLabel: 'Whislist',
              tabBarIcon: () => (
                <FontAwesomeIcon
                  icon={faHeart}
                  style={styles.icon}
                  size={25}
                  color="#rgb(195,200,215)"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
  },
});

// <View style={styles.container}>
// <TouchableOpacity
//   onPress={() => {
//     alert('test');
//     navigation.navigate('About');
//   }}>
//   <FontAwesomeIcon
//     icon={faHouse}
//     style={styles.icon}
//     size={25}
//     color="#rgb(195,200,215)"
//   />
// </TouchableOpacity>
// <TouchableOpacity>
//   <FontAwesomeIcon
//     icon={faBorderAll}
//     style={styles.icon}
//     size={25}
//     color="#rgb(195,200,215)"
//   />
// </TouchableOpacity>
// <TouchableOpacity>
//   <FontAwesomeIcon
//     icon={faHeart}
//     style={styles.icon}
//     size={25}
//     color="#rgb(195,200,215)"
//   />
// </TouchableOpacity>
// </View>
