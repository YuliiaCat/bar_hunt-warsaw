import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import MainScreen from '../../screens/MainScreen';
import MainLoadingScreen from '../../screens/MainLoadingScreen';
import MainSpinnerScreen from '../../screens/MainSpinnerScreen';
import MainSpinnerResultScreen from '../../screens/MainSpinnerResultScreen';

const Stack = createNativeStackNavigator<MainStackType>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.MAIN_SCREEN}
    >
      <Stack.Screen name={ScreenNames.MAIN_SCREEN} component={MainScreen} />
      <Stack.Screen name={ScreenNames.MAIN_LOADING_SCREEN} component={MainLoadingScreen} />
      <Stack.Screen name={ScreenNames.MAIN_SPINNER_SCREEN} component={MainSpinnerScreen} />
      <Stack.Screen name={ScreenNames.MAIN_SPINNER_RESULT_SCREEN} component={MainSpinnerResultScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
