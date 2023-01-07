// Modules
import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
// Components
import Card from '../components/Card.jsx';

const Home = ({ route, navigation }) => {
	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				flexGrow: 1,
				backgroundColor: '#2C2C2C',
				flex: 1,
			}}
		>
			<FlatList
				data={route.params.data.properties.data}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('AptDetails', item)}
						testID='detailBtn'
					>
						<Card item={item} />
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default Home;
