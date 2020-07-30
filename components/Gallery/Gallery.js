import React, {useCallback, useEffect} from 'react';
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

import {store, addPhotos} from '../redux/redux';

import {URL} from '../api/api';
import {connect} from 'react-redux';

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

const Gallery = ({navigation}) => {
  const fetchData = async () => {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        store.dispatch(addPhotos(data));
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const photos = store.getState().photos;

  if (photos.length) {
    return (
      <ScrollView>
        <Text>Gallery</Text>
        {photos.map((item) => (
          <View key={item.id} style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Large Photo', {
                  url: item.urls.regular,
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
  } else {
    return <Text>Loading...</Text>;
  }
};

export default connect((state) => ({
  state: state,
}))(Gallery);
