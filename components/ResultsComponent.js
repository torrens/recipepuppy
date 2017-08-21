import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default class ResultsComponent extends Component {
  constructor() {
    super();
  }

  fixResultsForDisplay(results) {
    if(results.length) {
      return results.map((result, index) => {
        result.key = index;
        return result;
      });
    } else {
      return [{key:0, title: 'No Results'}]
    }
  }

  renderItem = ({item}) => (
    <Text style={styles.item}>{item.key + 1} {item.title}</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.fixResultsForDisplay(this.props.results)}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    padding: 5,
    fontSize: 16,
  },
});