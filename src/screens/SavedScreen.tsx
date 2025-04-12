import { StyleSheet, View } from 'react-native';
import { MainScreenLayout, SharedList, SharedTitle } from '../components/shared';
import { useFavoritesStore } from '../store/useFavoritesStore';

const SavedScreen = () => {
  const { favoritePlaces } = useFavoritesStore();

  return (
    <MainScreenLayout>
      <View style={styles.container}>
        <SharedTitle title="Saved Bars" />
        <SharedList data={favoritePlaces} isSaved />
      </View>
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
    gap: 25,
  },
});

export default SavedScreen;
