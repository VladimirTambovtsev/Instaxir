import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl
} from 'react-native';
import { WebBrowser } from 'expo';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PhotoCard from '../components/PhotoCard/PhotoCard'



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Instaxir',
  };

  state = {
    isRefreshing: false
  }

  _keyExtractor = item => item.id

  _renderItem = ({ item }) => <PhotoCard data={item} />

  _refetchRequest = async () => {
    this.setState({ isRefreshing: true })
    await this.props.data.refetch()
    this.setState({ isRefreshing: false })
  }

  render() {
    console.log('props: ', this.props)
    if (this.props.data.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

      // <View style={styles.container}>
      //   <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
      //     <PhotoCard />
      //   </ScrollView>
      // </View>
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.data.photos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._refetchRequest}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const getPhotosQuery = gql`
{
  photos{
    id
    imageUrl
    caption
  }
}
`
export default graphql(getPhotosQuery)(HomeScreen)

