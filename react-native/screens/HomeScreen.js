import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import PhotoCard from '../components/PhotoCard/PhotoCard'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Instaxir',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
          <PhotoCard />
        </ScrollView>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 50
  }
});
