import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, StatusBar, StyleSheet, Image } from 'react-native';
/* import VideoGalery from './pages/VideoGalery'; */
import HomeScreen from './pages/HomeScreen';
import VideoGalery from './pages/VideoGalery';

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the details screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="VideoGalery" component={VideoGalery} />
      </Stack.Navigator>
    </NavigationContainer>
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
