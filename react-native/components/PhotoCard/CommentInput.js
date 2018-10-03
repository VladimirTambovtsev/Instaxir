import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { iOSColors } from 'react-native-typography'
import Touchable from '@appandflow/touchable'
import { systemWeights } from 'react-native-typography'


const makeCircle = size => ({
	height: size,
	width: size,
	borderRadius: size / 2
})
const fakeAvatar = 'https://images.pexels.com/photos/1466074/pexels-photo-1466074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const styles = StyleSheet.create({
	root: {
		minHeight: 50, 
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatarWrapper: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	avatar: {
		backgroundColor: 'grey',
		...makeCircle(30)
	},
	inputWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		borderWidth: 1,
		borderColor: '#F1F1F1',
		alignItems: 'flex-start',
		paddingVertical: 6,
		paddingHorizontal: 8,
		width: '95%',
		borderRadius: 8
	},
	inputText: {
		color: iOSColors.lightGray2,
		...systemWeights.light,
		paddingLeft: 8
	},
})

class CommentInput extends Component {
	render() {
		return (
			<View style={styles.root}>
				<View style={styles.avatarWrapper}>
					<Image source={{ uri: fakeAvatar }} style={styles.avatar} />
				</View>
				<Touchable feedback="opacity" style={styles.inputWrapper}>
					<View style={styles.input}>
						<Text style={styles.inputText}>Add a comment...</Text>
					</View>
				</Touchable>
			</View>
		)
	}
}

export default CommentInput