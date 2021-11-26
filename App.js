import React from 'react';
import { StyleSheet, Text, View,SafeAreaView ,StatusBar} from 'react-native';
import {ResetPassword,Welcome} from './src/Component/Index'
import HomapageCard from './src/ReusebleComponent/HomapageCard';
import HotelCard from './src/ReusebleComponent/HotelCard';
import Back from './src/ReusebleComponent/Back';
import AboutHotel from './src/Component/AboutHotel/AboutHotel';
import Location from './src/Component/Map/Location';
import CallOut from './src/ReusebleComponent/CallOut';
import History from './src/Component/History/History';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <History/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // // justifyContent: 'center',
    // marginTop:StatusBar.currentHeight,
  },
});
