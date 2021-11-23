import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import styles from "./Styles";
import { Images } from "../../../Constants/Index";
const backGroundImgHeight = Dimensions.get("screen").height;
const buttonLengths = 50;
const buttonBorderRadius = buttonLengths / 2;

const Login = () => {
  const passView = true;

  const PasswordToggle = () => (
    <TouchableOpacity activeOpacity={0.7}>
      {passView ? (
        <Icon name="eye" type="font-awesome" style={{ marginRight: 10 }} />
      ) : (
        <Icon
          name="eye-slash"
          type="font-awesome"
          style={{ marginRight: 10 }}
        />
      )}
    </TouchableOpacity>
  );

  const socialLogins = [
    {
      name: "facebook",
      iconname: "facebook",
      type: "font-awesome",
      color: "#111"
    },
    { name: "google", iconname: "google", type: "font-awesome", color: "#111" },
    { name: "mobile", iconname: "mobile", type: "font-awesome", color: "#111" }
  ];

  const Socials = () =>
    socialLogins.map((social) => (
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          borderColor: "white",
          width: "20%",
          padding: 10,
          marginLeft: 10,
          borderWidth: 0.5,
          borderColor: "rgba(0,0,0,.4)",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
        key={social.name}
      >
        <Icon name={social.iconname} type={social.type} />
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={Images.backImg}
        style={styles.backgroundImg}
      >
        <Image source={Images.logo} />
      </ImageBackground>
      <View style={styles.contentView}>
        <Text>Welcome Back</Text>
        <Input
          leftIcon={
            <Icon name="at" type="font-awesome" style={{ marginRight: 10 }} />
          }
          placeholder="Email"
          inputContainerStyle={{
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.2)",
            borderRadius: 20,
            paddingLeft: 5,
            paddingRight: 5
          }}
        />
        <Input
          leftIcon={
            <Icon name="lock" type="font-awesome" style={{ marginRight: 10 }} />
          }
          rightIcon={<PasswordToggle />}
          placeholder="Password"
          inputContainerStyle={{
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.2)",
            borderRadius: 20,
            paddingLeft: 5,
            paddingRight: 5
          }}
        />
        <TouchableOpacity style={{ alignItems: "flex-end", paddingRight: 10 }}>
          <Text style={{ color: "#0276FD" }}>forgot password?</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <Text>Sign in</Text>
          <Button
            icon={
              <Icon name="long-arrow-right" type="font-awesome" color="white" />
            }
            buttonStyle={{
              backgroundColor: "#0276FD",
              borderRadius: buttonBorderRadius,
              justifyContent: "center",
              alignItems: "center",
              width: buttonLengths,
              height: buttonLengths
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Socials />
        </View>
        <View>
          <Text>Don’t have account yet?</Text>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
