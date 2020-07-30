import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  smallPhoto: {
    width: windowWidth - 30,
    height: windowHeight / 3,
  },
  autorName: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  back: {
    backgroundColor: 'black',
  },
  imageLarge: {
    height: windowHeight,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    width: windowWidth,
  },
  error: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
    marginTop: 30,
    backgroundColor: 'black',
  },
  loading: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
  },
});
