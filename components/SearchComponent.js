import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class SearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, width: this.props.width, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {
          this.setState({query: text});
          this.props.search(text);
        }}
        value={this.state.text}
      />
    );
  }
}
