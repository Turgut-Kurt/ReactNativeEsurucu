import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';


export default class RightIcon extends Component {
    private props: any;

    render() {
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        const imgSource = this.props.imgSource;
        return (
            <View style={styles(locationX,locationY).box15}>
                <Image
                    source={imgSource}
                    style={styles(null,null).img}

                />
            </View>
        );
    }
}
RightIcon.propTypes = {
    imgSource : PropTypes.number.isRequired,
    locationX : PropTypes.string.isRequired,
    locationY : PropTypes.string.isRequired,
};
const styles =(locationX,locationY) => StyleSheet.create({
    box15: {

        flex: 1,
        alignItems: locationX,
        justifyContent: locationY
    },
    img : {
        width: 30,
        height: 30,
        resizeMode: 'center',
    }
});