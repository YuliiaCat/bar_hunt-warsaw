import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { BeerIcon } from '../../assets/images/icons';
import SharedText from './SharedText';

interface IButton {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
  isTextOnly?: boolean;
  isIcon?: boolean;
}

const SharedButton: React.FC<IButton> = ({
  style,
  text,
  onPress,
  disabled,
  isTextOnly,
  children,
  isIcon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={disabled}>
      {!isTextOnly && !isIcon && <BeerIcon width={20} height={20} />}
      {text && <SharedText text={text} fs18 style={styles.text} />}
      {isIcon && children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 22,
    paddingVertical: 20,
  },
  text: {
    paddingTop: 4,
  },
});

export default SharedButton;
