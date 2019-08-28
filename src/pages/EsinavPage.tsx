import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonFooter from '../component/ButtonFooter';
import HeadGradient from "../component/HeadGradient";
import HeadTop from "../component/HeadTop";
import HeadBodyText from "../component/HeadBodyText";
import HeadBodyImage2 from "../component/HeadBodyImage2";
import HeadBodyImage from "../component/HeadBodyImage";

export default class EsinavPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <HeadGradient
                        colors={['#D20709', '#C90C05', '#D60606']}
                        borderColor={"#770202"}
                    />
                    <HeadTop/>
                    <HeadBodyText
                        text={"E-SINAV TANITIM VİDEOSU"}
                        fontSize={22}
                        textcolor={"white"}
                        locationX="center"
                        locationY="flex-start"

                    />
                    <HeadBodyImage2
                        imgSource={require('../assets/1x/Cine_Camera_PNG_Clip_Art-1685.png')}
                        locationX="center"
                        locationY="flex-start"
                        width={120}
                        height={140}
                        marginLeft={35}
                        marginTop={8}
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