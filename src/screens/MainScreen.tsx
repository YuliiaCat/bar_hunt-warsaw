import { StyleSheet, View } from 'react-native';
import MainScreenLayout from '../components/shared/MainScreenLayout';
import { SharedButton, SharedText, SharedTitle } from '../components/shared';
import { Cube } from '../components';
import { BeerIcon, MusicIcon, SmileIcon, SportIcon } from '../assets/images/icons';
import { useState } from 'react';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackType } from '../navigation/types';

const MainScreen = () => {
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();

  const handlePress = (cubeName: string) => {
    setIsSelected((prev) => (prev === cubeName ? null : cubeName));
  };

  return (
    <MainScreenLayout>
      <View style={styles.titleBlock}>
        <SharedTitle title="Welcome!" />
        <SharedText text="Choose the category that interests you today" fs18 />
      </View>
      <View style={styles.cubeBox}>
        <Cube
          text="Themed Bars"
          icon={<BeerIcon />}
          onPress={() => handlePress('Themed Bars')}
          isTopLeft
          isSelected={isSelected === 'Themed Bars'}
        />
        <Cube
          text="Cozy Bars"
          icon={<SmileIcon />}
          onPress={() => handlePress('Cozy Bars')}
          isTopRight
          isSelected={isSelected === 'Cozy Bars'}
        />
        <Cube
          text="Musical Bars"
          icon={<MusicIcon />}
          onPress={() => handlePress('Musical Bars')}
          isBottomLeft
          isSelected={isSelected === 'Musical Bars'}
        />
        <Cube
          text="Sports Bars"
          icon={<SportIcon />}
          onPress={() => handlePress('Sports Bars')}
          isBottomRight
          isSelected={isSelected === 'Sports Bars'}
        />
      </View>
      <SharedButton
        text="Let’s Go!"
        style={[styles.btn, isSelected && styles.btnActive]}
        onPress={() => navigation.navigate('MAIN_LOADING_SCREEN', { theme: isSelected })}
        disabled={isSelected === null}
      />
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  titleBlock: {
    paddingVertical: 32,
    alignItems: 'center',
    gap: 13,
    marginBottom: 25,
  },
  cubeBox: {
    flexDirection: 'row',
    gap: 14,
    flexWrap: 'wrap',
    marginBottom: 19,
  },
  btn: {
    width: '100%',
    backgroundColor: colors.burgundyLight,
  },
  btnActive: {
    backgroundColor: colors.red,
  },
});

export default MainScreen;
