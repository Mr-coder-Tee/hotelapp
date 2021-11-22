import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./Styles";
import { Images, FONTS } from "../../../Constants/Index";
import { Button } from "react-native-elements";

const decoHeight = Dimensions.get("screen").height * 0.2;
const decoWidth = Dimensions.get("screen").width;

const Welcome = () => {
  const backImg = {
    uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  };

  const DecoImage = [
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBvdXRzaWRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      uri: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      uri: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      uri: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      uri: "https://images.unsplash.com/photo-1568652623543-c42c25821193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      uri: "https://images.unsplash.com/photo-1529852572069-2fcbe7599434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      uri: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const Deco = ({ img, h, w, t, b, l, r }) => (
    <View
      style={{
        height: h,
        width: w,
        borderRadius: 10,
        position: "absolute",
        top: t,
        left: l,
        right: r,
        bottom: b,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Image source={img} style={{ width: "100%", height: "100%" }} />
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImg}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <Image source={Images.logo} style={styles.logo} />
      </ImageBackground>
      <View style={styles.viewWelcome}>
        <Text style={{ textAlign: "center" }}>
          find your hotel easily and book in few easy steps
        </Text>
        <View
          style={{ width: decoWidth, height: decoHeight, overflow: "hidden" }}
        >
          <Deco img={DecoImage[0]} h={45} w={45} l={-10} r={0} t={10} b={0} />
          <Deco img={DecoImage[1]} h={45} w={45} l={50} r={0} t={0} b={90} />
          <Deco img={DecoImage[0]} h={45} w={45} l={-10} r={0} t={10} b={0} />
          <Deco img={DecoImage[0]} h={45} w={45} l={-10} r={0} t={10} b={0} />
          <Deco img={DecoImage[0]} h={45} w={45} l={-10} r={0} t={10} b={0} />
          <Deco img={DecoImage[0]} h={45} w={45} l={-10} r={0} t={10} b={0} />
        </View>
        <View>
          <Button
            title="Create Account"
            color="#0BB5FF"
            style={{ width: 100, height: 50 }}
            containerStyle={{ borderRadius: 20 }}
            buttonStyle={{ backgroundColor: "#0BB5FF" }}
          />
          <View>
            <Text>Alreay have an account?</Text>
            <TouchableOpacity>
              <Text style={{ color: "#0276FD" }}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
