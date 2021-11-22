import { StyleSheet,StatusBar, Dimensions } from "react-native";
const screenWidth=Dimensions.get('screen').width
const screenHieght=Dimensions.get('screen').height
const foreGround=Dimensions.get('screen').height*.35
const viewHeight=Dimensions.get('screen').height*.75

const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        width:screenWidth,
        height:screenHieght,

    },
    backgroundImg:{
        backgroundColor:'pink',
        height:foreGround,
        padding:30,
    },
    viewWelcome:{
        height:viewHeight
    },
    logo:{
        
    }
    
});
export default styles