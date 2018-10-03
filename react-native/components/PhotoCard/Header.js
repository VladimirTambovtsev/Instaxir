import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Touchable from '@appandflow/touchable'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'expo';
import { human, systemWeights } from 'react-native-typography'



const makeCircle = size => ({
	height: size,
	width: size,
	borderRadius: size / 2
})
const fakeAvatar = 'https://images.pexels.com/photos/1466074/pexels-photo-1466074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const styles = StyleSheet.create({
	root: {
		height: 60,
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingHorizontal: 12
	},
	userMetaWrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	btnWrapper: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarWrapper: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarImg: {
		backgroundColor: 'grey',
		...makeCircle(45)
	},
	userInfoWrapper: {
		justifyContent: 'center',
		flex: 1,
		paddingLeft: 10
	},
	username: {
		...human.subheadObject
	},
	location: {		
		...human.footnoteObject,
		// ...systemWeights.light	// makes thinner
	}
})

export default function Header({ avatar = fakeAvatar, username = 'Elton John', location = 'Canada, Toronto' }) {
	return (
		<View style={styles.root}>
			<View style={styles.userMetaWrapper}>
				<View style={styles.avatarWrapper}>
					<Image source={{ uri: avatar }} style={styles.avatarImg} />
				</View>
				<View style={styles.userInfoWrapper}>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.location}>{location}</Text>
				</View>
			</View>
			<Touchable feedback="opacity" style={styles.btnWrapper}>
				<Icon.Ionicons name="ios-more" size={25} />
			</Touchable>
		</View>
	)
}


