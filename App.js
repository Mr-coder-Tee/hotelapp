import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './src/Component/SplashScreen/Splashscreen';
import Welcome from './src/Component/Welcome/Welcome';

export default function App() {
  return (
    <Welcome/>
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
