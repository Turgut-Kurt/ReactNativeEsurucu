import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonFooter from '../component/ButtonFooter';
import HeadGradient from "../component/HeadGradient";
import HeadTop from "../component/HeadTop";
import HeadBodyText from "../component/HeadBodyText";
import HeadBodyImage2 from "../component/HeadBodyImage2";
import HeadBodyImage from "../component/HeadBodyImage";

export default class MotosikletPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <HeadGradient
                        colors={['#3780A2', '#3B7EA4', '#3A7EA1']}
                        borderColor={"#145372"}
                    />
                    <HeadTop/>
                    <HeadBodyText
                        text={"MOTOSİKET SINAV VİDEOSU"}
                        fontSize={22}
                        textcolor={"white"}
                        locationX="center"
                        locationY="flex-start"

                    />
                    <HeadBodyImage2
                        imgSource={require('../assets/1x/motor.png')}
                        locationX="center"
                        locationY="flex-start"
                        width={200}
                        height={160}
                        marginLeft={15}
                        marginTop={20}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>


                    </View>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>

                        <View style={styles.ImageContent}></View>
                    </View>

                </View>
                <View style={styles.footer}>
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/facebook.png')}
                        btnfooterbgColor={"#016EDE"}
                    />
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/instagram.png')}
                        btnfooterbgColor={"#DC0AEA"}
                    />
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/whatsapp.png')}
                        btnfooterbgColor={"#21BF00"}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EBEBEB",
    },
    container1: {
        flex: 36,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: null,
    },
    content: {
        flex: 55,
    },
    contentFlex: {
        flex: 11,
        flexDirection: "row",
    },
    footer: {
        flex: 9,
        flexDirection: "row",
    },
    ImageContent: {
        flex: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
        backgroundColor: "#EBEBEB",
    },
    bold: {
        fontWeight: "bold",
        fontSize: 25,
    }
});