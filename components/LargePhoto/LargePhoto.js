import React, {useState, useEffect} from 'react';
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageLarge: {
    height: windowHeight,
    resizeMode: 'center',
    alignSelf: 'center',
    width: windowWidth,
    borderRadius: 20,
  },
});

export const LargePhoto = ({route}) => (
  <View>
    <Text>{route.params.name}</Text>
    <Image source={{uri: `${route.params.url}`}} style={styles.imageLarge} />
  </View>
);
