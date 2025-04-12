import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../constants/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FirstLoader = () => {
  const drawOffset = useRef(new Animated.Value(46.82)).current;
  const eraseOffset = useRef(new Animated.Value(46.82)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const draw = Animated.timing(drawOffset, {
      toValue: 0,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const erase = Animated.timing(eraseOffset, {
      toValue: 0,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const reset = Animated.parallel([
      Animated.timing(drawOffset, {
        toValue: 46.82,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(eraseOffset, {
        toValue: 46.82,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(
      Animated.sequence([
        reset,
        draw,
        Animated.delay(200),
        Animated.parallel([
          erase,
          Animated.timing(translateX, {
            toValue: 40,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  }, );

  const animatedSvgStyle = {
    transform: [{ translateX }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedSvgStyle}>
        <Svg viewBox="0 0 100 50" width={500} height={250}>
          <AnimatedCircle
            cx={50}
            cy={25}
            r={15}
            stroke={colors.red}
            strokeWidth={2}
            fill="none"
            strokeDasharray="46.82, 93.64"
            strokeDashoffset={drawOffset}
          />
          <Circle cx={45} cy={25} r={1} fill={colors.red} />
          <Circle cx={55} cy={25} r={1} fill={colors.red} />
          <AnimatedCircle
            cx={50}
            cy={25}
            r={15}
            stroke={colors.darkGrey}
            strokeWidth={2}
            fill="none"
            strokeDasharray="46.82, 93.64"
            strokeDashoffset={eraseOffset}
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FirstLoader;
