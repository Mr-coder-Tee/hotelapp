import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import {COLORS} from '../../Constants/Index'


const Back = ({navigation}) => {
    // onPress={()=>navigation.goBack()}
    return (
        <TouchableOpacity style={{borderWidth:1,padding:10,borderRadius:10,borderColor:COLORS.gray,position:'absolute',top:10,left:10,backgroundColor:'rgba(255,255,255,.7)'}} >
            <Icon name="long-arrow-left" type="font-awesome"/>
        </TouchableOpacity>
    )
}

export default Back

const styles = StyleSheet.create({})
