import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ResetPassword,Welcome} from './src/Component/Index'
import HomapageCard from './src/ReusebleComponent/HomapageCard';
import HotelCard from './src/ReusebleComponent/HotelCard';
export default function App() {
  return (
    <View style={styles.container}>
      <HotelCard/>
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
