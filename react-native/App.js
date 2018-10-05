import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon, SecureStore } from 'expo';


import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/LoginScreen'


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/api/graphql' }),
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  async componentDidMount() {
     await SecureStore.setItemAsync('secure_token','sahdkfjaskdflas$%^&');
    const token = await SecureStore.getItemAsync('secure_token');
    console.log('token: ', token); // output: sahdkfjaskdflas$%^&
  }

  render() {
   

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      // if user has JWT render App,
      // otherwise render LoginScreen

      /*
        const token = await AsyncStorage.getItem('@instaxir/token')
        if (!token) { } else { }
      */

      return (
        <ApolloProvider client={client}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

            <LoginScreen />
          </View>
         </ApolloProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      // ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
       }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});