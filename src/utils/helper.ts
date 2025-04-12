import { Share, Linking } from 'react-native';

export const handleShare = async (title: string, description: string ) => {
  try {
    await Share.share({
      message: `${title}\n\n${description}\n\nCheck it out on Bar Hunt! 🍻`,
    });
  } catch (error) {
    console.log('Error sharing:', error);
  }
};

export const handleOpenMaps = (title: string) => {
  Linking.openURL(`http://maps.apple.com/?ll=52.2321,21.0196&q=${title}`);
};
