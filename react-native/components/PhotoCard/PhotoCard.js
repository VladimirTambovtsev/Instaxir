import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Header from './Header'
import ActionBtns from './ActionBtns'


const styles = StyleSheet.create({
	root: {
		minHeight: 800
	},
	img: {
		flex: 1
	}
})


class PhotoCard extends Component {
	render() {
		return (
			<View style={styles.root}>
				<Header />
				<Image source={{ uri: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={styles.img} />
				<ActionBtns />
			</View>
		)
	}
}


export default PhotoCard