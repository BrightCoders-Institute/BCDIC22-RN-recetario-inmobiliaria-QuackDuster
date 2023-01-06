import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from '../views/Home.jsx'
import AptDetails from "../views/AptDetails.jsx";
import dbinfo from '../data/dbinfo.json'

const Stack = createStackNavigator()
const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
        }}>

        <Stack.Screen
        name='Home'
        component = { Home }
        initialParams={{data: {properties: dbinfo} }}
        />

        <Stack.Screen
        name='AptDetails'
        component = { AptDetails }
        />
        </Stack.Navigator>
    )
}

export default Navigation