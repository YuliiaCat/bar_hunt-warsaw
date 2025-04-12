import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import GameStartScreen from '../../screens/GameStartScreen';
import GameScreen from '../../screens/GameScreen';

const Stack = createNativeStackNavigator<GameStackType>();

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.GAME_SCREEN}
    >
      <Stack.Screen name={ScreenNames.GAME_SCREEN} component={GameScreen} />
      <Stack.Screen name={ScreenNames.GAME_START_SCREEN} component={GameStartScreen} />
    </Stack.Navigator>
  );
};

export default GameStack;
