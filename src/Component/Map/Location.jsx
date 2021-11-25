import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'
import Back from '../../ReusebleComponent/Back'
import Map from './Map'

const Location = () => {
    return (
        <View style={styles.container}>
            <Back navigation={1}/>
            <View style={{flex:1}}>
                <Map/>
            </View>
            <View></View>
        </View>
    )
}

export default Location
