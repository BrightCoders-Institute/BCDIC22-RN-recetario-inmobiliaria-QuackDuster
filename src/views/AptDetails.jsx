// Modules
import React from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SPACING = 15;

const AptDetails = ({ route, navigation }) => {
	const safeInsets = useSafeAreaInsets();
	// const { name, address, imageURL, beds, bathrooms, size, price, favorite } = route.params;
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
				<FontAwesome
					name='close'
					style={{ color: '#FFFFFF', fontSize: 30 }}
					onPress={() => navigation.goBack()}
				/>
				<Feather
					name='share'
					style={{ color: '#FFFFFF', fontSize: 30, marginLeft: 260, marginRight: 15 }}
				/>
				<AntDesign
					name={route.params.favorite ? 'heart' : 'hearto'}
					style={{ color: '#FFFFFF', fontSize: 30, marginRight: 2 }}
				/>
			</Animated.View>
			<Image source={{ uri: route.params.imageURL }} style={styles.postImage} />

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
				<Text style={styles.postTitle}>{route.params.name}</Text>

				<Text style={styles.postLocation}>
					<Ionicons style={styles.iconLocation} name='ios-location-sharp' /> {route.params.address}
				</Text>
			</Animated.View>

			<View style={styles.postDetails}>
				<Text style={{ alignSelf: 'center', color: 'white', fontSize: 24, fontWeight: 'bold' }}>
					Details of the apartment
				</Text>
				<Text></Text>
				<Text style={styles.postSize}>Total of beds</Text>
				<Text style={styles.postData}>{route.params.beds}</Text>
				<Text style={styles.postSize}>Total of bathrooms</Text>
				<Text style={styles.postData}>{route.params.bathrooms}</Text>
				<Text style={styles.postSize}>Size of the apartment</Text>
				<Text style={styles.postData}>{route.params.size}</Text>
				<Text style={styles.postSize}>Price of the rent</Text>
				<Text style={styles.postData}>{route.params.price}</Text>
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
		fontSize: 15,
		fontWeight: 'semi-bold',
		textAlign: 'center',
		paddingTop: 10,
		color: '#FFFFFF',
	},
	postData: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
	},
	postIngredients: {
		textAlign: 'left',
		color: '#FFFFFF',
	},
	iconLocation: {
		fontSize: 18,
		color: 'white',
		letterSpacing: 2,
	},
	postLocation: {
		fontSize: 15,
		fontWeight: '300',
		textAlign: 'center',
		paddingTop: 10,
		color: '#FFFFFF',
	},
});

export default AptDetails;
