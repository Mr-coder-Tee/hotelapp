import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions
} from "react-native";
import { COLORS, FONTS } from "../../Constants/Index";
import { Icon } from "react-native-elements";
const cardHieght = Dimensions.get("screen").height * 0.35;
const cardWidth = Dimensions.get("screen").width * 0.55;

const HomapageCard = () => {
  const img = {
    uri: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.coverImg} />
      <View style={styles.details}>
        <View>
          <Text style={{ ...FONTS.h3, color: COLORS.white }} numberOfLines={1}>
            Hotel Name
          </Text>
          <Text style={{ ...FONTS.h4, color: COLORS.white }} numberOfLines={1}>
            2 rooms,2 Adults
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="map-marker" type="font-awesome" color={COLORS.white} />
          <Text
            style={{ ...FONTS.body2, color: COLORS.white, marginLeft: 5 }}
            numberOfLines={1}
          >
            address address addressaddr
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomapageCard;

const styles = StyleSheet.create({
  container: {
    height: cardHieght,
    width: cardWidth,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  coverImg: {
    width: "100%",
    height: "100%"
  },
  details: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.opacityColor,
    width: "100%",
    padding: 10
  }
});
