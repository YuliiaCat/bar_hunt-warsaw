import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import React from 'react';
import { LocationIcon, QuestionIcon } from '../assets/images/icons';

interface ITriangle {
  isSelected: boolean;
  isTopRight?: boolean;
  isTopLeft?: boolean;
  isBottomRight?: boolean;
  isBottomLeft?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

const Triangle: React.FC<ITriangle> = ({
  isSelected,
  isTopRight,
  isTopLeft,
  isBottomLeft,
  isBottomRight,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        isTopRight && styles.isTopRight,
        isTopLeft && styles.isTopLeft,
        isBottomLeft && styles.isBottomLeft,
        isBottomRight && styles.isBottomRight,
        isSelected ? styles.pinBox : styles.questionBox,
      ]}
    >
      <View style={styles.iconBox}>{isSelected ? <LocationIcon /> : <QuestionIcon />}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '50%',
    borderWidth: 4,
    borderColor: colors.borderColor,
  },
  pinBox: {
    backgroundColor: colors.yellow,
  },
  questionBox: {
    backgroundColor: colors.darkGrey,
  },
  iconBox: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isTopRight: {
    borderTopRightRadius: 150,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 14,
  },
  isTopLeft: {
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 14,
  },
  isBottomRight: {
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 14,
  },
  isBottomLeft: {
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 14,
  },
  selected: {
    borderColor: colors.red,
  },
});

export default Triangle;
