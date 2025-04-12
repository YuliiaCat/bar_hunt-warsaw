import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/colors';

interface ISharedText {
  text: string;
  style?: StyleProp<TextStyle>;
  fs18?: boolean;
  fs20?: boolean;
  isRules?: boolean,
}

const SharedText: React.FC<ISharedText> = ({ text, style, fs18, fs20, isRules }) => {

  return (
    <Text style={[
      styles.text,
      fs18 && styles.fs18,
      fs20 && styles.fs20,
      isRules && styles.rules,
      style,
    ]}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.JosefinRegular,
    fontSize: 16,
    lineHeight: 16,
    color: colors.white,
  },
  fs18: {
    fontFamily: fonts.JosefinBold,
    fontSize: 18,
    lineHeight: 18,
    color: colors.white,
    textAlign: 'center',
  },
  fs20: {
    fontFamily: fonts.JosefinBold,
    fontSize: 20,
    lineHeight: 20,
    color: colors.white,
  },
  rules: {
    fontFamily: fonts.JosefinRegular,
    fontSize: 18,
    lineHeight: 18,
    color: colors.white,
  },
});

export default SharedText;
