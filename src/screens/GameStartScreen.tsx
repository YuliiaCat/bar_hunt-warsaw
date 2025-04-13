import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  IconBox,
  MainScreenLayout,
  SharedButton,
  SharedText,
  SharedTitle,
} from '../components/shared';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../navigation/types';
import { colors } from '../constants/colors';
import { CupIcon, OliveIcon } from '../assets/images/icons';
import { useRef, useState } from 'react';
import { Modal } from '../components';

const CUP_POSITIONS = [0, 1, 2];

const GameStartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();
  const [olivePosition, setOlivePosition] = useState(1);
  const [shuffling, setShuffling] = useState(false);
  const [allowGuess, setAllowGuess] = useState(false);
  const [cupsDropped, setCupsDropped] = useState(false);
  const [gamePlayed, setGamePlayed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const cupAnim = useRef([
    new Animated.ValueXY({ x: 0, y: 0 }),
    new Animated.ValueXY({ x: 0, y: 0 }),
    new Animated.ValueXY({ x: 0, y: 0 }),
  ]).current;

  const cupsTranslateY = useRef(new Animated.Value(0)).current;

  const handleStart = () => {
    Animated.timing(cupsTranslateY, {
      toValue: 55,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setCupsDropped(true);
      shuffleCups();
    });
  };

  const shuffleCups = () => {
    setShuffling(true);
    const sequence = [];

    for (let i = 0; i < 5; i++) {
      const first = Math.floor(Math.random() * 3);
      let second = Math.floor(Math.random() * 3);
      while (second === first) {
        second = Math.floor(Math.random() * 3);
      }

      sequence.push(
        Animated.parallel([
          Animated.timing(cupAnim[first], {
            toValue: { x: (second - first) * 80, y: 0 },
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(cupAnim[second], {
            toValue: { x: (first - second) * 80, y: 0 },
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(50),
        Animated.parallel([
          Animated.timing(cupAnim[first], {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(cupAnim[second], {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      );

      if (olivePosition === first) {setOlivePosition(second);}
      else if (olivePosition === second) {setOlivePosition(first);}
    }

    Animated.sequence(sequence).start(() => {
      setShuffling(false);
      setAllowGuess(true);
      setGamePlayed(true);
    });
  };

  const handleGuess = (index: number) => {
    if (!allowGuess) {return;}

    setAllowGuess(false);

    Animated.timing(cupsTranslateY, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setSuccess(index === olivePosition);
      setIsModalOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      navigation.push('GAME_START_SCREEN');
    }, 1000);
  };

  return (
    <MainScreenLayout isGameScreen>
      <View
        style={[
          styles.container,
          cupsDropped && styles.cupsDropped,
          gamePlayed && styles.gamePlayed,
        ]}
      >
        {gamePlayed ? (
          <View style={styles.textContainer}>
            <SharedTitle title="Make your guess" />
            <SharedText fs18 text="Tap on the cup" />
          </View>
        ) : (
          <View style={styles.textContainer}>
            <SharedTitle title="Luck Cup" />
            <SharedText
              fs18
              text="This is a popular game in the bars of Warsaw, so we integrated it for you to have fun :)"
            />
          </View>
        )}

        <View style={styles.cups}>
          <View style={styles.cupContainer}>
            {CUP_POSITIONS.map((pos) => (
              <TouchableOpacity
                key={pos}
                onPress={() => handleGuess(pos)}
                disabled={!allowGuess}
                style={styles.cup}
              >
                <Animated.View
                  style={{
                    transform: [
                      ...cupAnim[pos].getTranslateTransform(),
                      { translateY: cupsTranslateY },
                    ],
                  }}
                >
                  <CupIcon />
                </Animated.View>
              </TouchableOpacity>
            ))}
          </View>
          <IconBox
            style={[
              olivePosition === 0 && styles.oliveStart,
              olivePosition === 1 && styles.olive,
              olivePosition === 2 && styles.oliveEnd,
            ]}
          >
            {(!shuffling && !cupsDropped) || (!shuffling && !allowGuess && gamePlayed) ? (
              <OliveIcon />
            ) : null}
          </IconBox>
        </View>
        {!gamePlayed && (
          <View>
            <SharedButton
              text={cupsDropped ? 'Wait' : 'Start'}
              style={styles.btn}
              onPress={handleStart}
              disabled={shuffling}
            />
            {!cupsDropped && (
              <SharedButton isTextOnly text="Rules" onPress={() => navigation.goBack()} />
            )}
          </View>
        )}
      </View>
      {isModalOpen && <Modal isSuccess={success} onClose={handleClose} />}
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 190,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
    gap: 13,
  },
  btn: {
    backgroundColor: colors.red,
  },
  cupContainer: {
    flexDirection: 'row',
  },
  cups: {
    paddingTop: 35,
    gap: 19,
  },
  cup: {
    zIndex: 2,
  },
  cupsDropped: {
    paddingBottom: 252,
  },
  gamePlayed: {
    justifyContent: 'flex-start',
    gap: 95,
  },
  olive: {
    alignItems: 'center',
  },
  oliveStart: {
    marginLeft: 20,
  },
  oliveEnd: {
    alignItems: 'flex-end',
    marginRight: 30,
  },
});

export default GameStartScreen;
