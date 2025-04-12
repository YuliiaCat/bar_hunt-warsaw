import { RouteProp } from '@react-navigation/native';

export type RootStackNavigation = {
  MAIN_TABS: undefined;
  LOADING_SCREEN: undefined;
  ONBOARDING_SCREEN: undefined;
};

export type MainTabsStackType = {
  MAP_SCREEN: undefined,
  MAIN_STACK: undefined;
  GAME_STACK: undefined;
  SAVED_SCREEN: undefined;
  RATING_SCREEN: undefined;
};

export type MainStackType = {
  MAIN_SCREEN: undefined;
  MAIN_SPINNER_SCREEN: {
    theme: string | null;
  };
  MAIN_LOADING_SCREEN: {
    theme: string | null;
  };
  MAIN_SPINNER_RESULT_SCREEN: {
    theme: string | null;
  };
};

export type GameStackType = {
  GAME_SCREEN: undefined;
  GAME_START_SCREEN: undefined;
};

export type MainRouteProp<T extends keyof MainStackType> = RouteProp<MainStackType, T>;
export type GameRouteProp<T extends keyof GameStackType> = RouteProp<GameStackType, T>;


