import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ILinearGradient{
  style?: StyleProp<ViewStyle>;
}

const SharedGradient: React.FC<ILinearGradient> = ({ style }) => {
  return (
    <LinearGradient
      colors={['#212121', '#131313']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={style}
    />
  );
};

export default SharedGradient;
