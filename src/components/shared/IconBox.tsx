import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface IIconBox {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
}

const IconBox: React.FC<IIconBox> = ({ children, style }) => {

  return (
    <View style={[styles.container, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: '50%',
  },
});

export default IconBox;
