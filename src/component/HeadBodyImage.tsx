import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';


export default class HeadBodyImage extends Component {
    render() {
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        const imgSource = this.props.imgSource;
        return (
            <View style={styles(locationX, locationY).main}>
                <View style={styles(null, null).frame}>
                    <Image
                        source={imgSource}
                        style={styles(null, null).img}

                    />

                </View>
            </View>
        );
    }
}
HeadBodyImage.propTypes = {
    imgSource: PropTypes.number.isRequired,
    locationX: PropTypes.string.isRequired,
    locationY: PropTypes.string.isRequired,
};
const styles = (locationX, locationY) => StyleSheet.create({
    main: {
        flex: 20,
        flexDirection: "column",
        alignItems: locationX,
        justifyContent: locationY,
        width: "100%",
    },
    img: {

        width: 90,
        height: 90,
        borderRadius: 45,
        resizeMode: "cover",
    },
    frame: {

        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120,
        borderWidth: 10,
        borderColor: '#2187FF',
        borderRadius: 60,
    },
    text: {
        fontWeight: "bold",
        color: "white"
    }

});
