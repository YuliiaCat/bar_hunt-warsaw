import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

const Label = () => {
  return (
    <View style={styles.imgContainer}>
      <View style={styles.imgBox}>
        <Image style={styles.img} source={require('../assets/images/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
    backgroundColor: colors.red,
    marginLeft: 25,
    marginRight: 25,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    paddingBottom: 2,
  },
  imgBox: {
    paddingTop: 82,
    paddingHorizontal: 28,
    paddingBottom: 21,
    height: 160,
    backgroundColor: colors.darkGrey,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  img: {
    width: '100%',
    height: 57,
    resizeMode: 'contain',
  },
});

export default Label;
