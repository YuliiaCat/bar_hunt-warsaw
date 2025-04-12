import { FlatList, useWindowDimensions } from 'react-native';
import OnBoardingItem from '../components/OnBoardingItem';
import onboardingData from '../assets/data/onboardingData';
import { useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigation } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../constants/screenNames';
import MainScreenLayout from '../components/shared/MainScreenLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigation>>();

  const handleNext = async () => {
    if (currentItem < onboardingData.length - 1) {
      setCurrentItem((prevIndex) => {
        const nextIndex = prevIndex + 1;
        flatListRef.current?.scrollToOffset({ offset: nextIndex * width, animated: true });
        return nextIndex;
      });
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace(ScreenNames.MAIN_TABS);
    }
  };

  return (
    <MainScreenLayout isDefaultScreen>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentItem(index);
        }}
        renderItem={({ item }) => <OnBoardingItem item={item} onPress={handleNext} />}
      />
    </MainScreenLayout>
  );
};

export default OnboardingScreen;
