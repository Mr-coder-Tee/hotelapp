import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/Index";
var stars=5

const Rating = ({rate}) => {

    var rating=rate;


    

const S=()=>{
    while(rate>0){
        if(rate==1){
            (<Icon name="star" type="font-awesome" color={COLORS.goldColor}/>)
        }else{
            (<Icon name="star-half" type="font-awesome" color={COLORS.goldColor}/>)
        }
        
        stars=stars-1;
        rating=rating-1;
        console.log("rating----->",rating)
        console.log("rating----->",stars)
    }
    while(stars!=0){
        return(<Icon name="star-o" type="font-awesome" color={COLORS.goldColor}/>)
        stars=stars-1;
    }
}


    



    return (
        <View style={{flexDirection:'row'}}>
          <S/>
      </View>
    )
}

export default Rating
