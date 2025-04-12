import { ImageBackground, StyleSheet, useWindowDimensions, View } from 'react-native';
import { colors } from '../constants/colors';
import IOnboarding from '../types/onboarding';
import React from 'react';
import Label from './Label';
import { SharedButton, SharedText, SharedTitle } from './shared';

interface IOnBoardingItem {
  item: IOnboarding;
  onPress: () => void;
}

const OnBoardingItem: React.FC<IOnBoardingItem> = ({ item, onPress }) => {
  const { image, title, text, btnText } = item;
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.labelBox}>
        <Label />
      </View>
      <ImageBackground style={styles.bcgImg} source={image} />
      <View style={styles.contentBox}>
        <View style={styles.content}>
          <SharedTitle title={title} />
          <SharedText text={text} />
          <SharedButton onPress={onPress} style={styles.btn} text={btnText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  labelBox: {
    paddingHorizontal: 42,
  },
  bcgImg: {
    position: 'absolute',
    width: '100%',
    height: 550,
    zIndex: -2,
  },
  contentBox: {
    height: '48%',
    backgroundColor: colors.red,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    overflow: 'hidden',
    paddingTop: 2,
  },
  content: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    paddingHorizontal: 42,
    paddingVertical: 50,
    gap: 20,
  },
  btn: {
    width: '100%',
    paddingVertical: 22,
    backgroundColor: colors.red,
    borderRadius: 22,
  },
});

export default OnBoardingItem;
