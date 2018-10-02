import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';

import { Text, View, StyleSheet, StatusBar } from 'react-native';	/* ui */
import { Header } from 'react-native-elements'

import Feed from './Feed';
import Explore from './Explore';



export default () => (
  <View>
	<StatusBar hidden />
  	<Header 
		centerComponent={<Text style={styles.header}>Instaxir</Text>}
		outerContainerStyles={{ backgroundColor: '#fff' }}
  		innerContainerStyles={{ justifyContent: 'space-around' }}
	/>
	<NativeRouter>
	  <Switch>
	    <Route exact path="/" component={Feed} />
	    <Route exact path="/explore" component={Explore} /> 
	  </Switch>
	</NativeRouter>
  </View>
);


const styles = StyleSheet.create({
	header: {
		fontSize: 22
	}
})
