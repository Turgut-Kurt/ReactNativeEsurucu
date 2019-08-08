
import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation'; //react navigation imp ettiğimiz yer

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage';

const AppNavigator = createStackNavigator({
    Home : {
        screen : HomePage
    },
    Detail : {
        screen : DetailPage
    },
    MainPage : {
        screen : MainPage
    },
    LoadingPage : {
        screen:LoadingPage
    }

},{
    initialRouteName : 'MainPage',
    headerMode: "none"
});
export default createAppContainer(AppNavigator);
