import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS } from "../../Constants/Index";
const calloutWidth = Dimensions.get("screen").width * 0.7;
const calloutHieght = Dimensions.get("screen").width * 0.25;

const CallOut = () => {
    const img = {
        uri: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      };
  return (
    <View
      style={{
        width: calloutWidth,
        height: calloutHieght,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          width: "30%",
          height: "100%",
          marginRight: 10,
          borderWidth: 0.5,shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          
          elevation: 2,
        }}
      >
        <Image source={img} style={{ width: "100%", height: "100%" }} />
      </View>
      <View>
        <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
          Hotel Name
        </Text>
        <Text numberOfLines={2}>Hotel Address</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="star" type="font-awesome" color={COLORS.goldColor} />
          <Text>4.3</Text>
        </View>
      </View>
    </View>
  );
};

export default CallOut;
