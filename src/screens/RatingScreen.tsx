import { StyleSheet, View } from 'react-native';
import { MainScreenLayout, SharedList, SharedText, SharedTitle } from '../components/shared';
import placeData from '../assets/data/placeData';

const RatingScreen = () => {
  const data = placeData.filter(place => place.category?.includes('random'));

  return (
    <MainScreenLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <SharedTitle title="Our rating" />
          <SharedText
            fs18
            text="Here we have placed the top 5 bars in Warsaw in our personal opinion :)"
          />
        </View>
        <SharedList data={data} isRating />
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    paddingTop: 32,
  },
  content: {
    gap: 13,
    alignItems: 'center',
  },
});

export default RatingScreen;
