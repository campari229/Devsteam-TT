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
  TouchableOpacity,
} from 'react-native';

import {URL} from '../api/api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  tinyLogo: {
    width: windowWidth - 30,
    height: windowHeight / 3,
  },
});

export const Gallery = ({navigation}) => {
  const [photos, getPhotos] = useState([]);

  async function fetchData() {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getPhotos(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <Text>Gallery</Text>
      {photos.map((item) => (
        <View key={item.id} style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Large Photo', {
                url: item.urls.full,
                name: item.user.name,
              })
            }>
            <Image
              style={styles.tinyLogo}
              source={{uri: `${item.urls.small}`}}
            />
            <Text>{item.user.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
