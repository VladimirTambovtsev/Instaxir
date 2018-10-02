import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';


class Feed extends Component {

	goToExplore = () => {
		this.props.history.push('/explore');
	};

	render() {
		return(
		<View>
			<Text>Instaxir</Text>
			
			
			<Button title="Регистрация" onPress={this.goToExplore} color="#fff" />
		
		</View>
		)
	}
}

export default Feed