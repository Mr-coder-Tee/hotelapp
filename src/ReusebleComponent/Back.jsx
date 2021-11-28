import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS,FONTS } from "../../Constants/Index";


const Back = ({ navigation,currentLocation }) => {
  // onPress={()=>navigation.goBack()}
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          borderColor: COLORS.gray,
          position: "absolute",
          top: 10,
          left: 10,
          backgroundColor: "rgba(255,255,255,.7)"
        }}
        onPress={()=>navigation.goBack()}
      >
        <Icon name="long-arrow-left" type="font-awesome" />
      </TouchableOpacity>
      {
          currentLocation&&(
              <Text style={{position:'absolute',left:70,top:20,...FONTS.h4}}>{currentLocation}</Text>
          )
      }
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({});
