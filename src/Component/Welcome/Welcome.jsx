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

const decoHeight = Dimensions.get("screen").height * 0.3;
const decoWidth = Dimensions.get("screen").width;

const Welcome = () => {
  // const backImg = {
  //   uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  // };

  const DecoImage = Images.DecoImage;

  const Deco = ({ img,...props }) => (
    <View
    {...props}
      style={{
       
        borderRadius: 10,
        position: "absolute",
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
        source={Images.backImg}
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
          style={{ width: decoWidth, height: decoHeight, overflow: "hidden",marginBottom:10,marginTop:10 }}
        >
          <Deco img={DecoImage[0]} height={50} width={50} left={-15} top={10}  />
          <Deco img={DecoImage[1]} height={80} width={80} left={50}  bottom={5} />
          <Deco img={DecoImage[2]} height={75} width={75} right={10} top={10}  />
          <Deco img={DecoImage[3]} height={45} width={45} left={90} top={-10}/>
          <Deco img={DecoImage[4]} height={50} width={50} right={-20} top={110} />
          <Deco img={DecoImage[5]} height={85} width={85} left={180} top={60}  />
          <Deco img={DecoImage[6]} height={40} width={40} left={290} bottom={10}  />
          <Deco img={DecoImage[7]} height={55} width={55} right={280} bottom={130}  />
          <Deco img={DecoImage[8]} height={50} width={50} right={140} bottom={30}  />
          <Deco img={DecoImage[9]} height={45} width={45} right={375} bottom={100}  />
        </View>
        <View style={{paddingLeft:20,paddingRight:20,justifyContent:'center'}}>
          <Button
            title="Create Account"
            color="#0BB5FF"
            style={{ width: '100%', height: 50 ,padding:10,}}
            containerStyle={{ borderRadius: 20 }}
            buttonStyle={{ backgroundColor: "#0BB5FF" }}
          />
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
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
