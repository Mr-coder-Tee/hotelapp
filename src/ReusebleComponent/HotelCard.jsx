import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/Index";
import Rating from './Rating'

const cardHieght = Dimensions.get("screen").height * 0.22;
const cardWidth = Dimensions.get("screen").width;

const HotelCard = () => {
  const img = {
    uri: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  var star=5
  var rate=4.3

//   const Rating=()=>(
//       <View style={{flexDirection:'row'}}> 
//           <Icon name="star" type="font-awesome" color={COLORS.goldColor}/>
//           <Icon name="star-o" type="font-awesome" color={COLORS.goldColor}/>
//           <Icon name="star-half" type="font-awesome" color={COLORS.goldColor}/>
//       </View>
//   )
  const Reviews=()=>(
    <View></View>
  )


  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.coverImg} />
      </View>
      <View style={{paddingVertical:10,marginLeft:5}}>
          <Text style={{...FONTS.h3}} numberOfLines={1}>R3500</Text>
          <Text style={{...FONTS.h4}} numberOfLines={1}>Hotel name</Text>
          <Text style={{...FONTS.body3}} numberOfLines={2}>description</Text>
          <Text style={{...FONTS.body3}} numberOfLines={1}>2 rooms,2 adults</Text>
          <Rating rate={4.3}/>
          <Reviews/>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: cardHieght,
    width: cardWidth,
    padding:1,
    // overflow:'hidden',
    // borderRadius:20,
    flexDirection:'row'
  },
  coverImg: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    height: "100%",
    width: "25%",
    overflow:'hidden',
    borderRadius:20
  }
});
