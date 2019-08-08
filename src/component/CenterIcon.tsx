import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import PropTypes from 'prop-types';
import RightIcon from "./RightIcon";

export default class CenterIcon extends Component {
  render() {
      const locationX = this.props.locationX;
      const locationY = this.props.locationY;
      const imgSource = this.props.imgSource;
    return (
        <View style={styles(locationX,locationY).box13}>
            <Image
                source={imgSource}
                style={styles(null,null).img}
            />
        </View>
    );
  }
}
CenterIcon.propTypes = {
    imgSource : PropTypes.number.isRequired,
    locationX : PropTypes.string.isRequired,
    locationY : PropTypes.string.isRequired,
};
const styles =(locationX,locationY) => StyleSheet.create({
    box13: {

        flex: 2,
        alignItems: locationX,
        justifyContent: locationY
    },
    img : {
        width: 50,
        height: 50,
        resizeMode: 'center',
    }
});