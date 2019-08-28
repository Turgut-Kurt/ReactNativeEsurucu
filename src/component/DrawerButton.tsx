import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
export default class DrawerButton extends Component {

    render() {
        const size = this.props.drawersize;
        const name = this.props.drawername;
        const color = this.props.drawercolor;
        const locationX = this.props.drawerlocationX;
        const locationY = this.props.drawerlocationY;
        return (
            <TouchableOpacity
                style={styles(locationX,locationY).container}>
                <Icon
                    size={size}
                    name={name}
                    color={color}
                />
            </TouchableOpacity>
        );
    }
}
DrawerButton.propTypes = {
    drawersize : PropTypes.number.isRequired,
    drawername : PropTypes.string.isRequired,
    drawercolor : PropTypes.string.isRequired,
    drawerlocationX : PropTypes.string.isRequired,
    drawerlocationY : PropTypes.string.isRequired,
};
const styles = (locationX,locationY) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: locationX,
        justifyContent: locationY,
    },
});
