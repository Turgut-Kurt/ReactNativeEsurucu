import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'; //react navigation imp ettiğimiz yer

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

const Drawer = createDrawerNavigator({
        Home: {
            screen: AppNavigator
        },

    },
    {
        initialRouteName: 'Home'
    });
export default createAppContainer(Drawer);
