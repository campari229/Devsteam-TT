import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// import {store} from '../../App';

import {useDispatch, useSelector} from 'react-redux';
import {getGallery} from '../bll/thunk';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  const state = useSelector((store) => ({
    gallery: store.photos,
    error: store.loadingError,
  }));

  if (state.error) {
    return <Text>LOADING ERROR</Text>;
  } else {
    if (state.gallery.length) {
      return (
        <ScrollView>
          <Text>Gallery</Text>
          {state.gallery.map((item) => (
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
      return <Text>Loading photos from server...</Text>;
    }
  }
};

export default Gallery;
