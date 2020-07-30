import React from 'react';
import 'react-native-gesture-handler';
import {Provider, connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './components/redux/redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import Gallery from './components/Gallery/Gallery';
import {LargePhoto} from './components/LargePhoto/LargePhoto';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Large Photo" component={LargePhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
