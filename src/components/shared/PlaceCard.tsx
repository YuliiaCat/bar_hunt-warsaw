/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, View } from 'react-native';
import IPlace from '../../types/place';
import React from 'react';
import { colors } from '../../constants/colors';
import SharedText from './SharedText';
import { CloseIcon, HeartIcon, ShareIcon, StarIcon } from '../../assets/images/icons';
import SharedButton from './SharedButton';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { handleOpenMaps, handleShare } from '../../utils/helper';

interface IPlaceCard {
  item: IPlace;
  isSaved?: boolean;
  isRating?: boolean;
  isMap?: boolean;
  onPress?: () => void;
}

const PlaceCard: React.FC<IPlaceCard> = ({ item, isSaved, isRating, isMap, onPress }) => {
  const { id, image, title, rating, description, category } = item;
  const { addPlace, removePlace, favoritePlaces } = useFavoritesStore();
  const isFavorite = favoritePlaces.some((place) => place.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removePlace(id);
    } else {
      addPlace({ id, title, image, description, rating, category });
    }
  };

  return (
    <View style={styles.container}>
      {isSaved && (
        <View style={styles.category}>
          <SharedText
            text={category ? `${category[0]} Bars` : ''}
            fs18
            style={{ color: colors.black, textTransform: 'capitalize' }}
          />
        </View>
      )}
      {isRating && (
        <View style={styles.number}>
          <SharedText fs18 text="#1" style={{ color: colors.black }} />
        </View>
      )}
      {isMap && <SharedButton style={styles.btnClose} isIcon onPress={onPress}><CloseIcon /></SharedButton>}
      <Image source={image} style={styles.img} />
      <View style={styles.content}>
        <SharedText fs20 text={title!} />
        <View style={styles.starsContainer}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} fill={i < rating! ? colors.yellow : colors.lightYellow} />
          ))}
        </View>
        <SharedText text={description!} />
        <View style={styles.btnContainer}>
          <SharedButton
            isTextOnly
            text="Visit now"
            style={styles.btnVisit}
            onPress={() => handleOpenMaps(title!)}
          />
          <SharedButton isIcon style={styles.iconBtn} onPress={handleFavoriteToggle}>
            <HeartIcon fill={isFavorite ? colors.red : colors.white} />
          </SharedButton>
          <SharedButton
            isIcon
            style={styles.iconBtn}
            onPress={() => handleShare(title!, description!)}
          >
            <ShareIcon />
          </SharedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 22,
    boxShadow: '0px 4px 32px 0px #00000040',
    gap: 18,
    paddingBottom: 29,
  },
  img: {
    width: '100%',
    height: 164,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  content: {
    paddingHorizontal: 22,
    gap: 9,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnVisit: {
    alignSelf: 'flex-start',
    backgroundColor: colors.red,
    paddingHorizontal: 34,
    paddingVertical: 14,
  },
  iconBtn: {
    width: 47,
    height: 47,
    backgroundColor: colors.dark,
    borderRadius: 50,
  },
  category: {
    position: 'absolute',
    top: 18,
    left: 22,
    backgroundColor: colors.yellow,
    zIndex: 2,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 22,
  },
  number: {
    position: 'absolute',
    top: 18,
    left: 22,
    backgroundColor: colors.yellow,
    zIndex: 2,
    paddingTop: 15,
    paddingBottom: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  btnClose: {
    position: 'absolute',
    top: 18,
    right: 22,
    backgroundColor: colors.dark,
    zIndex: 2,
    paddingTop: 15,
    paddingBottom: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
});

export default PlaceCard;
