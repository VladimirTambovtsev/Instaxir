import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native'
import { iOSColors } from 'react-native-typography'
import Touchable from '@appandflow/touchable'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FAFAFA'
	},
	header: {
		flex: .3,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: '#766687',
		fontSize: 40,
	},
	content: {
		flex: 1, 
		alignSelf: 'stretch'
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	sectionBottom: {
		flex: .7,
		justifyContent: 'flex-start'
	},
	inputWrapper: {
		height: 45,
		width: '80%',
		backgroundColor: '#FAFAFA',
		borderWidth: 1,
		borderColor: '#E4E4E4',
		borderRadius: 5,
		marginBottom: 10,
		padding: 10
	},
	input: {
		flex: 1,
		padding: 0		
	},
	loginBtn: {
		height: 45,
		width: '80%',
		backgroundColor: '#967AB470',
		borderRadius: 5,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginText: { 
		color: iOSColors.white
	},
	forgotWrapper: {
		marginVertical: 10,
		flexDirection: 'row'
	},
	link: {
		color: '#967AB470'
	},
	forgotText: {
		color: '#A4A4A4',
	},
	onWrapper: { 
		width: '80%',
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center'
	},
	orDivider: {
		height: 1,
		width: '100%',
		flex: 1,
		backgroundColor: '#A4A4A470'
	},
	orText: {
		color: '#A4A4A4',
		paddingLeft: 20,
		paddingRight: 20
	},
	facebookWrapper: {
		height: 45,
		width: "80%",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#3B5998",
		borderRadius: 5,
		marginBottom: 10
	},
	facebookTxt: {
		color: '#fff',
	},
	noAccountWrapper: {
		height: 45,
		width: '80%',
		borderColor: '#ECECEC',
		borderTopWidth: 1,
		alignSelf: "center",
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	noAccountText: {
		color: '#A4A4A4',
	}
})

class LoginScreen extends Component {
	render() {
		return (
			<View style={styles.root}>
			<StatusBar hidden />
				<View style={styles.header}>
					<Text style={styles.title}>Instaxir</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.section}>
						<View style={styles.inputWrapper}>
							<TextInput style={styles.input} placeholder="Email" />
						</View>
						<View style={styles.inputWrapper}>
							<TextInput style={styles.input} placeholder="Password" />
						</View>
						<Touchable feedback="opacity" style={styles.loginBtn}>
							<Text style={styles.loginText}>Login</Text>
						</Touchable>
						<View style={styles.forgotWrapper}>
							<Text style={styles.forgotText}>Forgot your password? </Text>
								<Touchable feedback="opacity">
									<Text style={styles.link}>Get help </Text>
								</Touchable>
							<Text style={styles.forgotText}>signin in</Text>
						</View>
					</View>
					<View style={styles.onWrapper}>
						<View style={styles.orDivider}></View>
						<View>
							<Text style={styles.orText}> OR </Text>
						</View>
						<View style={styles.orDivider}></View>
					</View>
					<View style={styles.section}>
						<Touchable feedback="opacity" style={styles.facebookWrapper}>
							<EvilIcons size={30} name="sc-facebook" color="#fff" />
							<Text style={styles.facebookTxt}>Continue with Facebook</Text>
						</Touchable>
					</View>
					<View style={styles.noAccountWrapper}>
						<Text style={styles.noAccountText}>Don't have an account?</Text>
						<Touchable feedback="opacity">
							<Text style={styles.link}> Sing up</Text>
						</Touchable>
					</View>
				</View>
			</View>
		)
	}
}

export default LoginScreen