import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import HeadMiddleImage from "./HeadMiddleImage";

export default class HeadBodyText extends Component {
    render() {
        const text = this.props.text;
        const fontSize = this.props.fontSize;
        const textcolor = this.props.textcolor;
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        return (
            <View style={styles(null,null,locationX,locationY).container}>
                <Text style={styles(fontSize,textcolor,null,null).headtext}>{text}</Text>
            </View>
        );
    }
}
HeadBodyText.propTypes = {
    fontSize : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    textcolor : PropTypes.string.isRequired,
    locationX : PropTypes.string.isRequired,
    locationY : PropTypes.string.isRequired,
};
const styles = (fontSize,textcolor,locationX,locationY) => StyleSheet.create({
    container: {
        flex: 8,
        width: "100%",
        alignItems:locationX,
        justifyContent:locationY
    },
    headtext: {
        color: textcolor,
        fontWeight: "bold",
        fontSize: fontSize,
    }

});