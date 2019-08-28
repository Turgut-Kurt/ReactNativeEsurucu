import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
export default class TextContent extends Component {
  render() {
      const text= this.props.text;
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
              {text}
          </Text>
      </View>
    );
  }
}
TextContent.propTypes = {
    text : PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 9,
        color: "black",

    },
    container: {

        flex: 3,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        marginTop: 15,

    },
});