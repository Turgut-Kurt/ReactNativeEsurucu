import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'; //react navigation imp ettiğimiz yer
import React, {Component} from 'react';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage';
import EsinavPage from './pages/EsinavPage';
import DireksiyonPage from './pages/DireksiyonPage';
import MotosikletPage from './pages/MotosikletPage';
import OnlineKitapPage from './pages/OnlineKitapPage';
import EhliyetSiniflariPage from './pages/EhliyetSiniflariPage';
import EhliyetRandevuPage from './pages/EhliyetRandevuPage';
import EgitimAlaniPage from './pages/EgitimAlaniPage';
import OnlineKayitPage from './pages/OnlineKayitPage';
import TrafikIsaretPage from './pages/TrafikIsaretPage';

import Icon from 'react-native-vector-icons/FontAwesome5';




const AppNavigator = createStackNavigator({
    Detail: {
        screen: DetailPage
    },
    MainPage: {
        screen: MainPage
    },
    LoadingPage: {
        screen: LoadingPage
    },
    EsinavPage: {
        screen: EsinavPage
    },
    DireksiyonPage: {
        screen: DireksiyonPage
    },
    MotosikletPage: {
        screen: MotosikletPage
    },
    OnlineKitapPage: {
        screen: OnlineKitapPage
    },
    OnlineKayitPage: {
        screen: OnlineKayitPage
    },
    EhliyetSiniflariPage: {
        screen: EhliyetSiniflariPage
    },
    EhliyetRandevuPage: {
        screen: EhliyetRandevuPage
    },
    EgitimAlaniPage: {
        screen: EgitimAlaniPage
    },
    TrafikIsaretPage: {
        screen: TrafikIsaretPage
    },

}, {
    initialRouteName: 'MainPage',
    headerMode: "none"
});

const drawer= createDrawerNavigator({

    MainPage: {
        screen: MainPage,
        navigationOptions : {
            drawerLabel:'ANASAYFA',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="home"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    EsinavPage: {
        screen: EsinavPage,
        navigationOptions : {
            drawerLabel:'E-SINAV TANITIM VİDEOSU',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="video"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    DireksiyonPage: {
        screen: DireksiyonPage,
        navigationOptions : {
            drawerLabel:'DİREKSİYON SINAVI VİDEOSU',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="play-circle"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    MotosikletPage: {
        screen: MotosikletPage,
        navigationOptions : {
            drawerLabel:'MOTOSİKLET SINAVI VİDEOSU',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="motorcycle"
                    size={20}
                    color={tintColor}
                />
            )
        }
    },
    OnlineKitapPage: {
        screen: OnlineKitapPage,
        navigationOptions : {
            drawerLabel:'ONLİNE KİTAP',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="book"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },

    EhliyetSiniflariPage: {
        screen: EhliyetSiniflariPage,
        navigationOptions : {
            drawerLabel:'EHLİYET SINAVLARI',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="chalkboard-teacher"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    EhliyetRandevuPage: {
        screen: EhliyetRandevuPage,
        navigationOptions : {
            drawerLabel:'EHLİYET RANDEVUSU',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="calendar-alt"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    EgitimAlaniPage: {
        screen: EgitimAlaniPage,
        navigationOptions : {
            drawerLabel:'EĞİTİM ALANI',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="road"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    OnlineKayitPage: {
        screen: OnlineKayitPage,
        navigationOptions : {
            drawerLabel:'ONLİNE KAYIT',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="hand-point-up"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    TrafikIsaretPage: {
        screen: TrafikIsaretPage,
        navigationOptions : {
            drawerLabel:'TRAFİK İŞARETLERİ',
            drawerIcon : ({tintColor}) =>(
                <Icon
                    name="traffic-light"
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
},{
    initialRouteName:'MainPage',
    drawerPosition:'left',
    drawerWidth:250,

    contentOptions : {
        activeTintColor:"#fff",
        inactiveTintColor:"#0c9fff",
        activeBackgroundColor:"#0c9fff",
        inactiveBackgroundColor:"#fff",
        labelStyle: { fontSize: 12 },
    }
});


export default createAppContainer(drawer);
//export default AppNavigator;