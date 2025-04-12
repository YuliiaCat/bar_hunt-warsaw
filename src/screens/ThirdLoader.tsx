import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/colors';

const ThirdLoader = () => (
  <View style={styles.container}>
    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
  </View>
);

export default ThirdLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
  },
  logo: {
    width: '100%',
    height: 84,
  },
});
