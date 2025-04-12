import { Dimensions, StyleSheet, View } from 'react-native';
import { MainScreenLayout, PlaceCard } from '../components/shared';
import { useState } from 'react';
import IPlace from '../types/place';
import { PinIcon } from '../assets/images/icons';
import MapView, { Marker } from 'react-native-maps';
import placeData from '../assets/data/placeData';

const MapScreen = () => {
  const [selectedPlace, setSelectedPlace] = useState<IPlace | null>(null);

  return (
    <MainScreenLayout isDefaultScreen>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.2297,
          longitude: 21.0122,
          latitudeDelta: 0.05,
          longitudeDelta: 0.03,
        }}
        userInterfaceStyle="dark"
        mapType="mutedStandard"
      >
        {placeData.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude!,
              longitude: place.longitude!,
            }}
            onPress={() => setSelectedPlace(place)}
            calloutAnchor={{ x: 0.5, y: 0 }}
          >
            <PinIcon />
          </Marker>
        ))}
      </MapView>

      {selectedPlace && (
        <View style={styles.floatingCard}>
          <PlaceCard item={selectedPlace} isMap onPress={() => setSelectedPlace(null)} />
        </View>
      )}
    </MainScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  floatingCard: {
    position: 'absolute',
    alignSelf: 'center',
    padding: 42,
    top: '50%',
    transform: [{ translateY: -250 }],
    zIndex: 2,
  },
});

export default MapScreen;
