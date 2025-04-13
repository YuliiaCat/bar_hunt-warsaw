import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import React, { useState } from 'react';
import { LaughIcon, OliveIcon } from '../assets/images/icons';
import { SharedButton, SharedText } from './shared';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../navigation/types';
import jokeData from '../assets/data/jokeData';
import { handleShare } from '../utils/helper';

interface IModal {
  isSuccess: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({ isSuccess, onClose }) => {
  const [showJoke, setShowJoke] = useState(false);
  const [jokeIndex, setJokeIndex] = useState<number | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();

  const handleButtonPress = () => {
    if (isSuccess) {
      const random = Math.floor(Math.random() * jokeData.length);
      setJokeIndex(random);
      setShowJoke(true);
    } else {
      navigation.push('GAME_START_SCREEN');
    }
  };

  const joke = jokeIndex !== null ? jokeData[jokeIndex] : null;

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <OliveIcon width={89} height={89} />
        <View style={isSuccess ? styles.content : styles.contentLose}>
          <SharedText
            fs20
            text={isSuccess ? 'You guessed it!' : 'Unfortunately, you did not guess'}
            style={styles.text}
          />
          {isSuccess && (
            <SharedText
              text="The gift for you is a bar joke, click on the button to open it"
              style={styles.text}
            />
          )}
        </View>
        {showJoke ? (
          <View style={styles.jokeContainer}>
            <View style={styles.joke}>
              <LaughIcon />
              <View>
                <SharedText
                  text={joke ? joke.question : 'Why don’t bartenders ever run out of ice?'}
                  style={styles.text}
                />
                <SharedText
                  text={joke ? joke.answer : 'Because they know how to keep their cool!'}
                  style={styles.text}
                />
              </View>
            </View>
            <View style={styles.btnBox}>
              <SharedButton
                isTextOnly
                text="Share"
                style={styles.btnJoke}
                onPress={() =>
                  handleShare(
                    'I won the game',
                    joke
                      ? `${joke.question}\n\n${joke.answer}`
                      : 'Why don’t bartenders ever run out of ice? Because they know how to keep their cool!',
                  )
                }
              />
              <SharedButton isTextOnly text="Close" style={styles.btnJoke} onPress={onClose} />
            </View>
          </View>
        ) : (
          <SharedButton
            isTextOnly
            text={isSuccess ? 'Open' : 'Try again'}
            style={styles.btn}
            onPress={handleButtonPress}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#4D4D4D4D',
    paddingHorizontal: 42,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  modalContainer: {
    borderWidth: 1,
    borderColor: colors.yellow,
    borderRadius: 22,
    paddingVertical: 24,
    paddingHorizontal: 22,
    backgroundColor: colors.darkGrey,
    boxShadow: '0px 4px 32px 0px #00000040',
    alignItems: 'center',
    gap: 20,
    maxWidth: 308,
  },
  content: {
    gap: 11,
  },
  contentLose: {
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
  },
  btn: {
    width: 146,
    backgroundColor: colors.red,
    paddingTop: 14,
    borderRadius: 50,
  },
  jokeContainer: {
    gap: 11,
  },
  joke: {
    paddingTop: 20,
    paddingHorizontal: 21,
    paddingBottom: 24,
    gap: 12,
    alignItems: 'center',
    backgroundColor: colors.borderColor,
    borderRadius: 13,
  },
  btnBox: {
    flexDirection: 'row',
    gap: 11,
  },
  btnJoke: {
    flex: 1,
    backgroundColor: colors.red,
    paddingTop: 14,
    borderRadius: 50,
  },
});

export default Modal;
