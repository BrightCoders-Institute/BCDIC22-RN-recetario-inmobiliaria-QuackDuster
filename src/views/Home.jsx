import React from "react";
import { Text, View, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import Card from '../components/Card.jsx'


const Home = ({navigation, route}) => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: '#2C2C2C', flex: 1}}>
            
            <Card 
            navigation = {navigation}
            route = {route}
            />
            
            

        </View>
    )
}

export default Home