import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import AppHeader from './components/AppHeader'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader/>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,50,90)',
    alignItems: 'center',
    width: '100%',
  },
});
