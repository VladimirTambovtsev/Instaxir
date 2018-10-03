import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { human, systemWeights } from 'react-native-typography'


const styles = StyleSheet.create({
	root: {
		minHeight: 50,
		paddingHorizontal: 12
	},
	wrapper: {
		flex: 1
	},
	text: {
		...human.footnoteObject,
		...systemWeights.light
	}
})

export default function Comments({ 
	caption = 'Nice scene',  
	username = 'Rehaan Henry',
	likedName = 'Tate Rodriguez',
	likedCount = '1,274'
}) {
	return (
		<View style={styles.root}>
			<View style={styles.wrapper}>
				<Text style={styles.text}>Liked by: 
					<Text style={systemWeights.regular}> {likedName}</Text> and 
					<Text style={systemWeights.regular}> {likedCount} others</Text>
				</Text>
			</View>
			<View style={styles.wrapper}>
				<Text style={styles.text}>
					<Text style={systemWeights.regular}>{username}: </Text>
					{caption}
				</Text>
			</View>
		</View>
	)
}