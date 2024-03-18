/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';

import Header from './components/Header';
import Appnavigator from './components/app.navigator';
import store from './redux/store';
function App(): React.JSX.Element {
  // const navigation = useNavigation();
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor={'white'} hidden={false} />
        {/* <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> */}

        <Header />
        <Appnavigator />
        {/* <View style={styles.container}> */}
        {/* <NavigationContainer>
          <Appbar navigation={navigation} />
        </NavigationContainer> */}
        {/* </View> */}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
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
  main: {
    backgroundColor: 'white',
    overflow: 'scroll',
    flex: 1,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 55,
    paddingVertical: 20,
    width: '100%',
    bottom: 0,
    // position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default App;
