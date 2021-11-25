import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../../Constants/Index";
const screenWidth = Dimensions.get("screen").width;
const screenHieght = Dimensions.get("screen").height;

const hotelBackgroundHieght = screenHieght * 0.3;
const viewHieght = screenHieght * 0.65;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width: screenWidth,
    height: screenHieght,
    flex: 1,
    alignItems: "center"
  },
  hotelBackground: {
    width: screenWidth,
    height: hotelBackgroundHieght,
    backgroundColor: "red"
  },
  viewContainer: {
    height: viewHieght,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 20
  },
  mapTouch: {
    backgroundColor: COLORS.goldColor,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  bookContainer: {
    backgroundColor: COLORS.bottomBookColor,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});
export default styles;
