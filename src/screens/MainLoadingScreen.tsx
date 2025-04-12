import { StyleSheet, View } from 'react-native';
import { MainScreenLayout, SharedText, SharedTitle } from '../components/shared';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainRouteProp, MainStackType } from '../navigation/types';
import { BeerIcon, MusicIcon, SmileIcon, SportIcon } from '../assets/images/icons';
import { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';

const MainLoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const route = useRoute<MainRouteProp<'MAIN_LOADING_SCREEN'>>();
  const { theme } = route.params as { theme: string };
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.navigate('MAIN_SPINNER_SCREEN', { theme: theme });
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  });

  const selectIcon = (name: string) => {
    switch (name) {
      case 'Themed Bars':
        return <BeerIcon />;
      case 'Cozy Bars':
        return <SmileIcon />;
      case 'Musical Bars':
        return <MusicIcon />;
      case 'Sports Bars':
        return <SportIcon />;
      default:
        return;
    }
  };

  return (
    <MainScreenLayout>
      <View style={styles.container}>
        {theme && (
          <View style={styles.textContainer}>
            {selectIcon(theme)}
            <SharedTitle title={theme} />
            <SharedText fs18 text="Good choice! We are filtering locations for you, please wait" />
          </View>
        )}
        <View>
          <View style={styles.barContainer}>
            <View style={styles.barFill}>
              <View style={[styles.bar, { width: `${progress}%` }]} />
            </View>
            <SharedText fs18 text={`${progress}%`} />
          </View>
        </View>
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
  textContainer: {
    alignItems: 'center',
    gap: 14,
    marginBottom: 30,
  },
  barContainer: {
    gap: 18,
  },
  barFill: {
    maxWidth: 300,
    minWidth: 270,
    height: 22,
    borderRadius: 50,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  bar: {
    backgroundColor: colors.red,
    height: '100%',
    borderRadius: 50,
  },
});

export default MainLoadingScreen;
