import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import PropTypes from 'prop-types';


export default class HeadMiddleImage extends Component {
  render() {
      const locationX = this.props.MiddlelocationX;
      const locationY = this.props.MiddlelocationY;
      const imgSource = this.props.MiddleimgSource;
      const width = this.props.Middlewidth;
      const height = this.props.Middleheight;
    return (
        <View style={styles(locationX,locationY).container}>
            <Image
                source={imgSource}
                style={styles(null,null,width,height).img}
            />
        </View>
    );
  }
}
HeadMiddleImage.propTypes = {
    MiddleimgSource : PropTypes.number.isRequired,
    MiddlelocationX : PropTypes.string.isRequired,
    MiddlelocationY : PropTypes.string.isRequired,
    Middlewidth : PropTypes.number.isRequired,
    Middleheight : PropTypes.number.isRequired,
};
const styles =(locationX,locationY,width,height) => StyleSheet.create({
    container: {
        flex: 2,
        alignItems: locationX,
        justifyContent: locationY
    },
    img : {
        width: width,
        height: height,
        resizeMode: 'center',
    }
});
