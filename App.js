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
import Profile from './src/Component/ProfileSetting/Profile';
import WriteReview from './src/Component/WriteReview/WriteReview';
import CommentCard from './src/ReusebleComponent/CommentCard';
import GalaryView from './src/Component/ViewGalary/GalaryView';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GalaryView renderIndex={1}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop:StatusBar.currentHeight,
  },
});
