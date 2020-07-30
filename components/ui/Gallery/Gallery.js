import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getGallery} from '../../bll/thunk';
import {styles} from '../Style/mainStyle';

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
    return <Text style={styles.error}>LOADING ERROR</Text>;
  } else {
    if (state.gallery.length) {
      return (
        <ScrollView style={styles.back}>
          {state.gallery.map((item) => (
            <View key={item.id} style={styles.photoContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Full Photo', {
                    url: item.urls.regular,
                    name: item.user.name,
                  })
                }>
                <Image
                  style={styles.smallPhoto}
                  source={{uri: `${item.urls.small}`}}
                />
                <Text style={styles.autorName}>{item.user.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return <Text style={styles.loading}>Loading photos from server...</Text>;
    }
  }
};

export default Gallery;
