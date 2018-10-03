import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import Touchable from '@appandflow/touchable'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'expo';


const styles = StyleSheet.create({
	root: {
		height: 50, 
		paddingHorizontal: 12,
		flexDirection: 'row'
	},
	actionWrappers: {
		flex: 1, 
		flexDirection: 'row',
		justifyContent: 'flex-start', 
	},
	actionBtn: {
		flex: .8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		color: 'grey'
	},
	fakeView: {
		flex: 2, 
	},
	bookmarkWrapper: {
		flex: 0.6, 
		justifyContent: 'center',
		alignItems: 'center'
	}
})


class ActionBtns extends Component {
	state = {
		liked: false
	}
	render() {
		const { liked } = this.state
		return (
			<View style={styles.root}>
				<View style={styles.actionWrappers}>
					<Touchable feedback="opacity" style={styles.actionBtn}>
						<Ionicons style={styles.icon} name={Platform.OS === 'ios' ? `ios-heart${liked ? '' : '-outline'}` : 'md-heart'} size={30} />
					</Touchable>
					<Touchable feedback="opacity" style={styles.actionBtn}>
						<Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-text-outline' : 'md-text'} size={30} />
					</Touchable>
					<Touchable feedback="opacity" style={styles.actionBtn}>
						<Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-send-outline' : 'md-send'} size={30} />
					</Touchable>
					<View style={styles.fakeView}></View>
					<Touchable feedback="opacity" style={styles.bookmarkWrapper}>
						<Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-bookmarks-outline' : 'md-bookmark'} size={30} />
					</Touchable>
				</View>
			</View>
		)
	}
}

export default ActionBtns