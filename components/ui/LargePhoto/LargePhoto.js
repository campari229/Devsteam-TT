import React from 'react';
import {ScrollView, View, Image} from 'react-native';

import {styles} from '../Style/mainStyle';

export const LargePhoto = ({route}) => (
  <ScrollView>
    <View>
      <Image source={{uri: `${route.params.url}`}} style={styles.imageLarge} />
    </View>
  </ScrollView>
);
