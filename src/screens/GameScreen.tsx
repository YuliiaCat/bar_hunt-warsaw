import { StyleSheet, View } from 'react-native';
import { IconBox, MainScreenLayout, SharedButton, SharedText, SharedTitle } from '../components/shared';
import { colors } from '../constants/colors';
import { OliveIcon } from '../assets/images/icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../navigation/types';

const GameScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();

  return (
    <MainScreenLayout isGameScreen>
      <View style={styles.container}>
        <View>
          <SharedTitle title='Rules for "Luck Cup"' />
          <SharedText
            text="Start the Game: An olive is placed under one of the cups."
            isRules
            style={styles.rules}
          />
          <SharedText
            isRules
            text="Watch Closely: The cups will shuffle. Make Your Guess: Tap the cup where you think the olive is hiding."
          />
          <SharedText isRules text="Win or Retry:" />
          <SharedText
            isRules
            text=" • Guess correctly to win fun rewards (facts, recipes, jokes)."
          />
        </View>
        <IconBox style={styles.olive}><OliveIcon width={52} height={52}/></IconBox>
        <SharedButton text="Ok" style={styles.btn} onPress={() => navigation.navigate('GAME_START_SCREEN')} />
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 88,
    paddingBottom: 250,
    justifyContent: 'space-between',
  },
  rules: {
    paddingTop: 13,
  },
  btn: {
    backgroundColor: colors.red,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 235,
    height: 116,
  },
  olive: {
    paddingTop: 42,
    alignItems: 'center',
  },
});

export default GameScreen;
