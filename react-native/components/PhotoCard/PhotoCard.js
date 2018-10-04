import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Touchable from '@appandflow/touchable'
import { human, iOSColors } from 'react-native-typography'

import Header from './Header'
import ActionBtns from './ActionBtns'
import Comments from './Comments'
import CommentInput from './CommentInput'

const styles = StyleSheet.create({
	root: {
		minHeight: 600,
		paddingBottom: 50
	},
	img: {
		flex: 1
	},
	commentsWrapper: {
		height: 50,
		paddingHorizontal: 12,
	},
	commentViewAll: {
		...human.calloutObject,
		...human.footnoteObject,
		color: iOSColors.midGray
	}
})


class PhotoCard extends Component {
	render() {
		return (
			<View style={styles.root}>
				<Header />
				<Image source={{ uri: this.props.data.imageUrl }} style={styles.img} />
				<ActionBtns />
				<Comments caption={this.props.data.caption} />
				<View style={styles.commentsWrapper}>
					<Touchable feedback="opacity">
						<Text style={styles.commentViewAll}>View all 13 comments</Text>
					</Touchable>
					<CommentInput />
				</View>
			</View>
		)
	}
}


export default PhotoCard