import { FlatList, StyleSheet } from 'react-native';
import IPlace from '../../types/place';
import React from 'react';
import PlaceCard from './PlaceCard';

interface ISharedList {
  data: IPlace[];
  isSaved?: boolean;
  isRating?: boolean;
}

const SharedList: React.FC<ISharedList> = ({ data, isRating, isSaved }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PlaceCard item={item} isRating={isRating} isSaved={isSaved} />}
      contentContainerStyle={styles.list}
      scrollEnabled
    />
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 18,
    paddingBottom: 160,
  },
});

export default SharedList;
