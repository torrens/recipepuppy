import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SearchComponent from "./components/SearchComponent";
import ResultsComponent from "./components/ResultsComponent";
import RecipeSearch from './components/RecipeSearch';
const { width } = Dimensions.get('window');

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {results: []}
  }

  async search(query) {
    const results = await new RecipeSearch().search(query);
    this.setState({results});
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchComponent width={width} search={this.search.bind(this)} />
        <ResultsComponent results={this.state.results}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
});
