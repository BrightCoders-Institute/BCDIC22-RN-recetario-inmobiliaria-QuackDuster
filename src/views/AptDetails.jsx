import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SPACING = 15;

const AptDetails = ({ route, navigation }) => {
	const safeInsets = useSafeAreaInsets();
	const { name, address, imageURL, beds, bathrooms, size, price } = route.params;
	console.log(name, address);

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					position: 'absolute',
					top: safeInsets.top + SPACING,
					left: safeInsets.left + SPACING,
					right: safeInsets.right + SPACING,
					zIndex: 1,
					flexDirection: 'row',
					justifyContent: 'flex-start',
				}}
			>
				<FontAwesome name='close' style={{ color: '#FFFFFF', fontSize: 30 }} onPress={() => navigation.goBack()} />
				<Feather name='share' style={{ color: '#FFFFFF', fontSize: 30, marginLeft: 260, marginRight: 15 }} />
				<MaterialIcons
					name={'favorite'}
					style={{ color: '#FFFFFF', fontSize: 30, marginRight: 2 }}
					// onPress={() => {
					//     setFavs(!favs)
					//     // favorite = favs
					//     }}
				/>
			</Animated.View>
			<Image source={{ uri: imageURL }} style={styles.postImage} />

			<Animated.View
				style={{
					position: 'relative',
					left: safeInsets.left + SPACING,
					right: safeInsets.right + SPACING,
					bottom: 100,
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<Text style={styles.postTitle}>{name}</Text>
				<Text style={styles.postSize}>{address}</Text>
			</Animated.View>

			<View style={styles.postDetails}>
				<Text style={styles.postSize}>Total of beds: {beds}</Text>
				<Text style={styles.postSize}>Total of bathrooms: {bathrooms}</Text>
				<Text style={styles.postSize}>Size of the apartment: {size}</Text>
				<Text style={styles.postSize}>Price of the rent: {price}</Text>
				<Text></Text>
			</View>

			<View>
				<Text></Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2C2C2C',
	},
	postDetails: {
		position: 'relative',
		bottom: 45,
		paddingHorizontal: SPACING,
		flex: 1,
	},
	postImage: {
		height: 350,
		width: '100%',
		opacity: 0.4,
	},
	postTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	postSize: {
		fontSize: 20,
		fontWeight: 'semi-bold',
		color: '#FFFFFF',
	},
	postIngredients: {
		textAlign: 'left',
		color: '#FFFFFF',
	},
});

export default AptDetails;
