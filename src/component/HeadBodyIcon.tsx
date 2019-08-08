import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';


export default class HeadBodyIcon extends Component {
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
                <Text style={styles(null,null).text}>ÖZGÜNEŞ SÜRÜCÜ KURSU</Text>
            </View>
        );
    }
}
HeadBodyIcon.propTypes = {
    imgSource: PropTypes.number.isRequired,
    locationX: PropTypes.string.isRequired,
    locationY: PropTypes.string.isRequired,
};
const styles = (locationX, locationY) => StyleSheet.create({
    main: {

        flex: 22,
        alignItems: locationX,
        justifyContent: locationY,

    },
    img: {

        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: "cover",
    },
    frame: {
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        height: 110,
        borderWidth: 10,
        borderColor: '#2187FF',
        borderRadius: 55,
    },
    text: {
        fontWeight:"bold",
        color:"white"
    }

});