import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { MainRouteProp, MainStackType } from '../navigation/types';
import { MainScreenLayout, SharedButton, SharedText, SharedTitle } from '../components/shared';
import { colors } from '../constants/colors';
import { Triangle } from '../components';
import { WineBottleIcon } from '../assets/images/icons';
import { useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MainSpinnerScreen = () => {
  const route = useRoute<MainRouteProp<'MAIN_SPINNER_SCREEN'>>();
  const { theme } = route.params as { theme: string };
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const rotation = useRef(new Animated.Value(0)).current;
  const currentRotation = useRef(0);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();

  useEffect(() => {}, [currentRotation]);

  const spinBottle = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedIndex(null);

    const spins = Math.floor(Math.random() * 4) + 5;
    const direction = Math.floor(Math.random() * 4);
    const extraAngle = 360 * spins + direction * 90;

    const newRotation = currentRotation.current + extraAngle;

    Animated.timing(rotation, {
      toValue: newRotation,
      duration: 3000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start(() => {
      const finalDeg = newRotation % 360;
      currentRotation.current = newRotation;

      const TRIANGLE_INDEX_BY_ANGLE = [1, 3, 2, 0];
      const angleIndex = Math.round(finalDeg / 90) % 4;
      const selected = TRIANGLE_INDEX_BY_ANGLE[angleIndex];

      setSelectedIndex(selected);
      setIsSpinning(false);
    });
  };

  const spin = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'extend',
  });

  const handleOpenPlace = () => navigation.navigate('MAIN_SPINNER_RESULT_SCREEN', { theme: theme});

  return (
    <MainScreenLayout>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <SharedTitle title={theme} />
          <SharedText
            fs18
            text="The locations have been successfully selected, all that remains is to scroll the bottle, let the power of randomness decide!"
          />
        </View>
        <View
          style={[
            styles.spinnerContainer,
            isSpinning && styles.isBottleSpinning,
            selectedIndex !== null && styles.isBottleSpinning,
          ]}
        >
          <Triangle
            isTopLeft
            isSelected={selectedIndex === 0}
            onPress={handleOpenPlace}
            disabled={selectedIndex !== 0}
          />
          <Triangle
            isTopRight
            isSelected={selectedIndex === 1}
            onPress={handleOpenPlace}
            disabled={selectedIndex !== 1}
          />
          <Triangle
            isBottomLeft
            isSelected={selectedIndex === 2}
            onPress={handleOpenPlace}
            disabled={selectedIndex !== 2}
          />
          <Triangle
            isBottomRight
            isSelected={selectedIndex === 3}
            onPress={handleOpenPlace}
            disabled={selectedIndex !== 3}
          />
          <Animated.View style={[styles.wineBottle, { transform: [{ rotate: spin }] }]}>
            <WineBottleIcon width={74} height={74} stroke={colors.borderColor} />
          </Animated.View>
        </View>
        <SharedButton
          text={isSpinning || selectedIndex !== null ? 'Spinning...' : 'Spin'}
          style={[
            styles.btn,
            isSpinning && styles.isSpinning,
            selectedIndex !== null && styles.isSpinning,
          ]}
          onPress={spinBottle}
          disabled={selectedIndex !== null}
        />
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 23,
    paddingTop: 41,
  },
  textContainer: {
    alignItems: 'center',
    gap: 13,
  },
  btn: {
    backgroundColor: colors.red,
    paddingHorizontal: 71,
  },
  isSpinning: {
    backgroundColor: colors.burgundyLight,
  },
  spinnerContainer: {
    width: 290,
    height: 290,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: '50%',
    backgroundColor: colors.red,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: colors.borderColor,
  },
  wineBottle: {
    position: 'absolute',
    top: 104,
    left: 104,
    zIndex: 2,
  },
  isBottleSpinning: {
    boxShadow: '0px 0px 4px 0px #FF272E, 0px 0px 64px 0px #FF272E26',
  },
});

export default MainSpinnerScreen;
