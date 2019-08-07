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
                <View style={styles(null, null).box3}>
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

        flex: 30,
        alignItems: locationX,
        justifyContent: locationY,

    },
    img: {

        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: "cover",
    },
    box3: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120,
        borderWidth: 5,
        borderColor: '#2187FF',
        borderRadius: 60,
    },
    text: {
        fontWeight:"bold",
        color:"white"
    }

});