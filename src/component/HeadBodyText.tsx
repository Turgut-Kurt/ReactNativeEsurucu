import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
z
export default class HeadBodyText extends Component {
    render() {
        const text = this.props.text;
        const fontSize = this.props.fontSize;
        const textcolor = this.props.textcolor;
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        const marginTop = this.props.TextmarginTop;

        return (
            <View style={styles(null, null, locationX, locationY,null).container}>
                <Text style={styles(fontSize, textcolor, null, null,marginTop).headtext}>{text}</Text>
            </View>
        );
    }
}
HeadBodyText.propTypes = {
    fontSize: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    textcolor: PropTypes.string.isRequired,
    locationX: PropTypes.string.isRequired,
    locationY: PropTypes.string.isRequired,
    TextmarginTop: PropTypes.number.isRequired,


};
const styles = (fontSize, textcolor, locationX, locationY,marginTop) => StyleSheet.create({
    container: {
        flex: 8,
        width: "100%",
        alignItems: locationX,
        justifyContent: locationY
    },
    headtext: {

        marginTop: marginTop,
        color: textcolor,
        fontWeight: "bold",
        fontSize: fontSize,
    }

});
