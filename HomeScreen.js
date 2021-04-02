import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import dictionary from './database';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word: '',
      lexicalCategory: '',
      definition: '',
    };
  }

  getWord = (text) => {
    var text = text.toLowerCase();
    try {
      var word = dictionary[text]['word'];
      var lexicalCategory = dictionary[text]['lexicalCategory'];
      var definition = dictionary[text]['definition'];
      this.setState({
        word: word,
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    } catch (err) {
      alert('Sorry! This word is not available now.');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>

      <Image
       style={styles.icon}
         source = {{uri: "https://www.illustrationsof.com/royalty-free-dictionary-clipart-illustration-1094761.jpg"}} />


        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              text: text,
              word: 'Loading...',
              lexicalCategory: 'Loading...',
              examples: [],
              definition: 'Loading...',
            });
          }}
          value={this.state.text}
        />{' '}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>
          {' '}
          <Text style={styles.textIn}> Search </Text>{' '}
        </TouchableOpacity>{' '}
        <View style={styles.output}>
          <Text style={styles.word}>Word:</Text>
          <Text style={styles.word1}>{this.state.word}</Text>

          <Text style={styles.type}>Type:</Text>
          <Text style={styles.type1}>{this.state.lexicalCategory}</Text>

          <Text style={styles.meaning}>Definition:</Text>
          <Text style={styles.meaning1}>{this.state.definition}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    height: 100,
    borderWidth: 5,
    borderColor:"blue",
    margin: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop:10
  },
  searchButton: {
    width: 140,
    height: 90,
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    borderColor:"purple",
    marginTop:-30
  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'yellow',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    marginRight: 260,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'cyan',
  },
  word1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -27,
    marginLeft: 70,
  },
  type: {
    marginRight: 260,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'cyan',
    marginTop: 30,
  },
  type1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -27,
    marginLeft: 70,
  },
  meaning: {
    marginRight: 100,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'cyan',
    marginTop: 30,
  },
  meaning1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -27,
    marginLeft: 110,
  },
  output: {
    flex: 0.7,
    justifyContent: 'center',
  },
  icon: {
   width: 190,
    height:140,
    borderWidth: 2,
    marginTop:20,
    borderBottomColor:"#d400ff",
    borderLeftColor:"#002aff",
    borderTopColor:"#ff00c3",
    borderRightColor:"#00fff6",
    borderWidth:5,
  }
});
