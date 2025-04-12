import { Pressable, StyleSheet } from 'react-native';
import { SharedText } from '../components/shared';
import React, { ReactElement } from 'react';
import { colors } from '../constants/colors';

interface ICube {
  text: string;
  icon: ReactElement;
  onPress: () => void;
  isTopRight?: boolean;
  isTopLeft?: boolean;
  isBottomRight?: boolean;
  isBottomLeft?: boolean;
  isSelected?: boolean;
}

const Cube: React.FC<ICube> = ({
  text,
  icon,
  onPress,
  isTopRight,
  isTopLeft,
  isBottomRight,
  isBottomLeft,
  isSelected,
}) => {
  return (
    <Pressable style={[
      styles.container,
      isTopRight && styles.isTopRight,
      isTopLeft && styles.isTopLeft,
      isBottomRight && styles.isBottomRight,
      isBottomLeft && styles.isBottomLeft,
      isSelected && styles.selected,
    ]} onPress={onPress}>
      {icon}
      <SharedText text={text} fs18 />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    gap: 24,
    paddingTop: 34,
    paddingBottom: 19,
    borderWidth: 3,
    borderColor: colors.darkGrey,
  },
  isTopRight: {
    borderTopRightRadius: 36,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  isTopLeft: {
    borderTopLeftRadius: 36,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  isBottomRight: {
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  isBottomLeft: {
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  selected: {
    borderColor: colors.red,
  },
});

export default Cube;
