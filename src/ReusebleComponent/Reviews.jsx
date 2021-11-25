import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { COLORS } from "../../Constants/Index";

const Reviews = ({ hotelreviews }) => {
  const [to, setTo] = useState();
  const [remain, setRemain] = useState("");

  useEffect(() => {
    const range = () => {
      if (hotelreviews.length >= 5) {
        if (hotelreviews.length - 4 >= 100) {
          setRemain("99+");
        } else {
          setRemain(hotelreviews.length - 4);
        }
        setTo(4);
      } else {
        setTo(hotelreviews.length);
      }
    };
    range();
  }, []);
  return (
    <TouchableOpacity style={{ flexDirection: "row", paddingLeft: 15 }} activeOpacity={.7}>
      {hotelreviews.slice(0, to).map((review) => (
        <Avatar
          key={review.id}
          rounded
          size="small"
          source={{ uri: review.avatar }}
          containerStyle={{
            borderColor: "white",
            borderWidth: 1,
            marginLeft: -15
          }}
        />
      ))}

      {hotelreviews.length >= 5 && (
        
          <Avatar
            rounded
            size="small"
            title={remain}
            containerStyle={{
              borderColor: "white",
              borderWidth: 1,
              marginLeft: -15,
              backgroundColor: "#C4C4C4"
            }}
          />
      )}
    </TouchableOpacity>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
