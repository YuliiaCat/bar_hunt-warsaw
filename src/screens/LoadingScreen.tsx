import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from '../constants/screenNames';
import FirstLoader from './FirstLoader';
import { colors } from '../constants/colors';
import { RootStackNavigation } from '../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigation>>();

  useEffect(() => {
    const checkOnboarding = async () => {
      const hasSeen = await AsyncStorage.getItem('hasSeenOnboarding');
      if (hasSeen === 'true') {
        navigation.replace(ScreenNames.MAIN_TABS);
      } else {
        navigation.replace(ScreenNames.ONBOARDING_SCREEN);
      }
    };

    const timer = setTimeout(checkOnboarding, 1800);
    return () => clearTimeout(timer);
  },);

  return (
    <View style={styles.container}>
      <FirstLoader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
  },
});

export default LoadingScreen;
