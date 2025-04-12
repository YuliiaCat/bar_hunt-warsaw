import { StyleSheet, View } from 'react-native';
import { MainScreenLayout, PlaceCard, SharedButton, SharedText } from '../components/shared';
import { colors } from '../constants/colors';
import { LocationIcon } from '../assets/images/icons';
import { MainRouteProp, MainStackType } from '../navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import placeData from '../assets/data/placeData';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MainSpinnerResultScreen = () => {
  const route = useRoute<MainRouteProp<'MAIN_SPINNER_RESULT_SCREEN'>>();
  const { theme } = route.params as { theme: string };
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();
  const keyword = theme.toLowerCase().split(' ')[0];

  const selectedTheme = placeData.filter((place) => place.category?.includes(keyword));

  const randomItem =
    selectedTheme.length > 0
      ? selectedTheme[Math.floor(Math.random() * selectedTheme.length)]
      : null;

  console.log('placeData', placeData);
  console.log('theme', theme);
  console.log('randomItem', randomItem);

  return (
    <MainScreenLayout>
      <View style={styles.container}>
        {randomItem ? (
          <>
            <View style={styles.round}>
              <LocationIcon />
            </View>
            <PlaceCard item={randomItem} />
          </>
        ) : (
          <SharedText fs18 text="No places found for this theme." />
        )}
        <SharedButton
          isTextOnly
          text="Spin Again"
          style={styles.btn}
          onPress={() => navigation.replace('MAIN_SPINNER_SCREEN', { theme })}
        />
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    gap: 27,
  },
  btn: {
    backgroundColor: colors.red,
    width: 204,
    alignSelf: 'center',
  },
  round: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: [{ translateX: -53 }],
    width: 106,
    height: 106,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    zIndex: 2,
  },
});

export default MainSpinnerResultScreen;
