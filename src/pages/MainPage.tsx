import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RightIcon from '../component/RightIcon';
import CenterIcon from '../component/CenterIcon';
import HeadBodyIcon from '../component/HeadBodyIcon';
import Content from '../component/Content';
import ButtonFooter from '../component/ButtonFooter';
import HeadGradient from '../component/HeadGradient';


export default class extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <View style={styles.topheader}>

                        <CenterIcon
                            imgSource={require('../assets/1x/e-surucu3.png')}
                            locationX="flex-start"
                            locationY="flex-start"
                        />
                        <View style={styles.freeSpace}><Text></Text></View>
                        <CenterIcon
                            imgSource={require('../assets/1x/e-surucu3.png')}
                            locationX="center"
                            locationY="flex-start"
                        />
                        <View style={styles.freeSpace}><Text> </Text></View>
                        <RightIcon
                            imgSource={require('../assets/1x/profile_human.png')}
                            locationX="flex-end"
                            locationY="center"

                        />
                        <RightIcon
                            imgSource={require('../assets/1x/turn-notifications-on-button.png')}
                            locationX="flex-start"
                            locationY="center"

                        />

                    </View>
                    <HeadBodyIcon
                        imgSource={require('../assets/1x/phone.png')}
                        locationX="center"
                        locationY="center"
                    />

                </View>
                <View style={styles.content}>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/Cine_Camera_PNG_Clip_Art-1685.png')}
                            circlebg={"#BEBEBE"}
                            text={`E-SINAV
TANITIM VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/play.png')}
                            circlebg={"#FBE7C7"}
                            text={`DİREKSİYON
SINAVI VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/motor.png')}
                            circlebg={"#2D8BA3"}
                            text={`MOTOSİKLET
SINAV VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/book.png')}
                            circlebg={"black"}
                            text={`ONLİNE
KİTAP`}
                            btntext={"İNCELE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/student.png')}
                            circlebg={"#DD6513"}
                            text={`EHLİYET
SINAVLARI`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/takvim.png')}
                            circlebg={"black"}
                            text={`EHLİYET
RANDEVUSU`}
                            btntext={"Randevu Al"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/path.png')}
                            circlebg={"#F9B200"}
                            text={`EĞİTİM
ALANI`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/touch.png')}
                            circlebg={"#97A09B"}
                            text={`ONLİNE
KAYIT`}
                            btntext={"Kayıt Ol"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/lamb.png')}
                            circlebg={"#F1A81A"}
                            text={`TRAFİK
İŞARETLERİ`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
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

    },
    header: {
        flex: 30,

        flexDirection: "column",
        backgroundColor:"#0871E6",
    },
    content: {
        flex: 60,
        backgroundColor: 'white',
    },
    contentFlex: {
        flex: 12,
        flexDirection: "row",
        backgroundColor: 'red',
    },

    content3: {
        flex: 2,
        backgroundColor: 'yellow',
    },
    footer: {
        flex: 10,
        flexDirection: "row",
        backgroundColor: 'red',
    },
    topheader: {

        flex: 10,
        flexDirection: "row"
    },
    freeSpace: {

        flex: 2,
    },
    ImageContent: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: 'white',
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
    },


});