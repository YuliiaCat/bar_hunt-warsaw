import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IPlace from '../types/place';

type FavoritesStore = {
  favoritePlaces: IPlace[];

  addPlace: (place: IPlace) => void;
  removePlace: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favoritePlaces: [],

      addPlace: (place) =>
        set((state) => ({
          favoritePlaces: state.favoritePlaces.some((fav) => fav.id === place.id)
            ? state.favoritePlaces
            : [...state.favoritePlaces, place],
        })),

      removePlace: (id) =>
        set((state) => ({
          favoritePlaces: state.favoritePlaces.filter((fav) => fav.id !== id),
        })),
    }),
    {
      name: 'favorites-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
