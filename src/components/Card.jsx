//Modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons, FontAwesome, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Card = ({ item }) => {
	const [favorite, setFavorite] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<ImageBackground
					style={styles.photo}
					source={{ uri: item.imageURL }}
					imageStyle={{ borderRadius: 12 }}
				>
					<View style={styles.favsCont}>
						<MaterialIcons name='star' size={14} color='#EEBA00' style={{ textAlign: 'center' }} />
						<Text style={{ color: '#7A6229', fontSize: 12, fontWeight: 'bold' }}>
							{item.rating}
						</Text>
					</View>
				</ImageBackground>
				<View style={styles.infoBlock}>
					<Text style={styles.panelTitle}>{item.name}</Text>
					<Text style={styles.panelAddress}>
						<Ionicons style={styles.iconLocation} name='ios-location-sharp' /> {item.address}
					</Text>

					<View style={styles.inLine}>
						<Text style={styles.panelAmenities}>
							<Ionicons style={styles.panelAmenitiesIcons} name='bed-sharp' /> {item.beds}
						</Text>
						<Text style={styles.panelAmenities}>
							<FontAwesome5 style={styles.panelAmenitiesIcons} name='bath' /> {item.bathrooms}
						</Text>
						<Text style={styles.panelAmenities}>
							<Entypo style={styles.panelAmenitiesIcons} name='ruler' /> {item.size}
						</Text>
					</View>
					<Text style={styles.panelPrice}>{item.price}</Text>
				</View>
				<TouchableOpacity
					style={styles.likeButton}
					testID='favsBtn'
					onPress={() => {
						item.favorite = !item.favorite;
						setFavorite(item.favorite);
					}}
				>
					<FontAwesome
						name='heart'
						style={{ color: `${item.favorite ? 'red' : 'white'}`, fontSize: 17, borderRadius: 20 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 20,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
	},
	inLine: {
		flexDirection: 'row',
		flex: 3,
		justifyContent: 'space-between',
	},
	photo: {
		width: 110,
		height: 110,
		borderRadius: 10,
		margin: 5,
		justifyContent: 'center',
		marginLeft: 0,
	},
	infoBlock: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1,
	},
	panelTitle: {
		fontSize: 22,
		marginBottom: 4,
	},
	panelAddress: {
		fontSize: 14,
		color: 'gray',
		marginBottom: 5,
	},
	panelAmenities: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold',
		marginTop: 5,
		marginBottom: 5,
		marginRight: 15,
	},
	panelAmenitiesIcons: {
		fontSize: 18,
		color: 'gray',
		letterSpacing: 10,
	},
	iconLocation: {
		fontSize: 18,
		color: 'gray',
		letterSpacing: 2,
	},
	panelPrice: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22,
	},
	likeButton: {
		backgroundColor: '#00B074',
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		width: 30,
		height: 30,
		borderRadius: 100,
	},
	favsCont: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 35,
		marginBottom: 4,
		marginTop: 73,
		padding: 4,
		paddingHorizontal: 6,
		backgroundColor: '#FBEDB7',
		borderRadius: 10,
		alignSelf: 'flex-start',
	},
});

export default Card;
