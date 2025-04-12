import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../constants/screenNames';
import { RootStackNavigation } from './types';
import TabBarStack from './TabBarStack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackNavigation>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.LOADING_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ScreenNames.MAIN_TABS} component={TabBarStack} />
        <Stack.Screen name={ScreenNames.LOADING_SCREEN} component={LoadingScreen} />
        <Stack.Screen name={ScreenNames.ONBOARDING_SCREEN} component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
