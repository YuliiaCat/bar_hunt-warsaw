import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

interface ISharedTitle {
  title: string;
}

const SharedTitle: React.FC<ISharedTitle> = ({ title }) => <Text style={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: fonts.JosefinBold,
    fontSize: 28,
    lineHeight: 28,
  },
});

export default SharedTitle;
