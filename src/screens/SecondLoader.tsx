import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/colors';
import { BigSmileIcon } from '../assets/images/icons';

const SecondLoader = () => (
  <View style={styles.container}>
    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    <BigSmileIcon />
  </View>
);

export default SecondLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    justifyContent: 'center',
  },
  logo: {
    width: 265,
    height: 74,
    alignSelf: 'center',
  },
});
