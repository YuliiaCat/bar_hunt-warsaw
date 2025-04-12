import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '../../constants/screenNames';
import { colors } from '../../constants/colors';
import { MainTabsStackType } from '../types';
import GameStack from '../GameStack';
import { GameIcon, HeartIcon, MapIcon, StarIcon, WineBottleIcon } from '../../assets/images/icons';
import MainStack from '../MainStack';
import SavedScreen from '../../screens/SavedScreen';
import RatingScreen from '../../screens/RatingScreen';
import { IconBox } from '../../components/shared';
import MapScreen from '../../screens/MapScreen';

const Tab = createBottomTabNavigator<MainTabsStackType>();

const getTabBarIcon = (routeName: string) => {
  return ({ focused }: { focused: boolean }) => {
    const backgroundColor = focused ? colors.red : colors.dark;

    switch (routeName) {
      case ScreenNames.GAME_STACK:
        return <GameIcon />;
      case ScreenNames.MAP_SCREEN:
        return (
          <IconBox style={{ backgroundColor }}>
            <MapIcon />
          </IconBox>
        );
      case ScreenNames.MAIN_STACK:
        return (
          <IconBox style={{ backgroundColor }}>
            <WineBottleIcon />
          </IconBox>
        );
      case ScreenNames.SAVED_SCREEN:
        return (
          <IconBox style={{ backgroundColor }}>
            <HeartIcon />
          </IconBox>
        );
      case ScreenNames.RATING_SCREEN:
        return (
          <IconBox style={{ backgroundColor }}>
            <StarIcon />
          </IconBox>
        );
      default:
        return null;
    }
  };
};

const TabBarStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.MAIN_STACK}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: getTabBarIcon(route.name),
        tabBarStyle: {
          position: 'absolute',
          marginLeft: 42,
          marginRight: 42,
          bottom: 59,
          height: 64,
          borderRadius: 50,
          backgroundColor: colors.darkGrey,
          borderWidth: 1,
          borderColor: colors.red,
          boxShadow: '0px 4px 32px 0px #00000040',
        },
        tabBarItemStyle: {
          paddingVertical: 6,
          top: 6,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={ScreenNames.GAME_STACK} component={GameStack} />
      <Tab.Screen name={ScreenNames.MAP_SCREEN} component={MapScreen} />
      <Tab.Screen name={ScreenNames.MAIN_STACK} component={MainStack} />
      <Tab.Screen name={ScreenNames.SAVED_SCREEN} component={SavedScreen} />
      <Tab.Screen name={ScreenNames.RATING_SCREEN} component={RatingScreen} />
    </Tab.Navigator>
  );
};

export default TabBarStack;
