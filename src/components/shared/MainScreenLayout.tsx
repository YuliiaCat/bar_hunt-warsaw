import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import Label from '../Label';
import React, { ReactNode } from 'react';
import SharedGradient from './SharedGradient';

interface IMainScreenLayout {
  children: ReactNode;
  isDefaultScreen?: boolean;
  isGameScreen?: boolean;
}

const MainScreenLayout: React.FC<IMainScreenLayout> = ({ isDefaultScreen, children, isGameScreen }) => {

  return (
    <View style={isDefaultScreen ? styles.default : styles.container}>
      {!isDefaultScreen && <Label />}
      {isGameScreen && <SharedGradient style={styles.gradient} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 42,
    backgroundColor: colors.dark,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 270,
    height: 116,
  },
});

export default MainScreenLayout;
