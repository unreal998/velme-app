import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Wrapper } from '@googlemaps/react-wrapper';
import { GOOGLE_MAP_KEY } from './constants.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper apiKey={GOOGLE_MAP_KEY}>
      </Wrapper>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
