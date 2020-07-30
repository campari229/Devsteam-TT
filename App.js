import React from 'react';
import 'react-native-gesture-handler';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {reducer} from './components/bll/redux';

import Gallery from './components/ui/Gallery/Gallery';
import {LargePhoto} from './components/ui/LargePhoto/LargePhoto';

export const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Full Photo" component={LargePhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
