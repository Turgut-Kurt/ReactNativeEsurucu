import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from '../component/Content';
import ButtonFooter from '../component/ButtonFooter';
import LoadingPage from './LoadingPage';
import HeadGradient from "../component/HeadGradient";



export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoading: true}
    }
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                30
            )
        );
    };
    async componentDidMount() {

        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({ isLoading: false });
        }
    }
    render() {
        if (this.state.isLoading) {
            return <LoadingPage/>;
        }
        return (
            <View style={styles.container}>
                <HeadGradient/>

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

    content: {
        flex: 55,
        backgroundColor: 'white',
    },
    contentFlex: {
        flex: 11,
        flexDirection: "row",
        backgroundColor: 'red',
    },

    content3: {
        flex: 2,
        backgroundColor: 'yellow',
    },
    footer: {
        flex: 9,
        flexDirection: "row",
        backgroundColor: 'red',
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