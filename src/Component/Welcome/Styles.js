import { StyleSheet, StatusBar, Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;
const screenHieght = Dimensions.get("screen").height;
const viewHeight = Dimensions.get("screen").height * 0.75;
const decoHeight = Dimensions.get("screen").height * 0.3;
const decoWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    width: screenWidth,
    height: screenHieght
  },
  viewWelcome: {
    height: viewHeight
  },
  logo: {},
  decoStyle: {
    width: decoWidth,
    height: decoHeight,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 10
  },
  btnContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center"
  }
});
export default styles;
