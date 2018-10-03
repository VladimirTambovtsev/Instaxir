import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from './Header'

const styles = StyleSheet.create({
	root: {
		minHeight: 800,
		backgroundColor: 'blue',
	}
})

class PhotoCard extends Component {
	render() {
		return (
			<View style={styles.root}>
				<Header></Header>
				<Text>Photo</Text>
			</View>
		)
	}
}


export default PhotoCard