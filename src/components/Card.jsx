import React from 'react'
import { StatusBar } from "expo-status-bar"
import { View, Text, FlatList, Image, TouchableHighlight, SectionList, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import dbinfo from '../data/dbinfo.json'
import { FontAwesome }  from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const Card = () => {
    return (
        <FlatList
            data={dbinfo.data}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Image style={styles.photo} source={{uri: item.imageURL}}/>
                        <View style={styles.infoBlock}>
                            <Text style={styles.panelTitle}>{item.name}</Text>
                            <Text style={styles.panelAddress}>
                            <Ionicons style={styles.iconLocation} name='ios-location-sharp'/> {item.address}
                                </Text>

                            <View style={styles.inLine} >
                                <Text style={styles.panelAmenities}>
                                    <Ionicons style={styles.panelAmenitiesIcons} name='bed-sharp'/> {item.beds}
                                </Text>
                                <Text style={styles.panelAmenities}>
                                    <FontAwesome5 style={styles.panelAmenitiesIcons} name='bath'/> {item.bathrooms}
                                    </Text>
                                <Text style={styles.panelAmenities}>
                                    <Entypo style={styles.panelAmenitiesIcons} name='ruler'/> {item.size}
                                    </Text>
                            </View>
                            <Text style={styles.panelPrice}>{item.price}</Text>

                            
                        </View>
                        <TouchableOpacity style={styles.likeButton}>
                            <FontAwesome name='heart' style={{color:'#FFFFFF', fontSize: 17}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
        
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    row: {
        flexDirection: "row",
        flex: 1
    },
    inLine:{
        flexDirection: "row",
        flex: 3,
        justifyContent: "space-between"
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 10,
        margin: 5,
        justifyContent: "center",
        marginLeft:0
        
    },
    infoBlock: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    panelTitle: {
        fontSize: 22,
        marginBottom: 4
    },
    panelAddress: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5
    },
    panelAmenities: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
        marginRight: 15,
    },
    panelAmenitiesIcons: {
        fontSize: 18,
        color: "gray",
        letterSpacing:10
    },
    iconLocation: {
        fontSize: 18,
        color: "gray",
        letterSpacing:2,
    },
    panelPrice: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
    },
    likeButton: {
        backgroundColor: "#23D689",
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 100,
    }
})

export default Card