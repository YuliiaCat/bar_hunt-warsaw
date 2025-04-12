import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RootNavigation from './src/navigation';
import { colors } from './src/constants/colors';

function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});

export default App;
