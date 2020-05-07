import React from 'react'
import FinancialTopNav from './Financial'
import Home from '../../Component/Home/Index'
import UserStack from './User'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

const BottomTab = createBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            tabBarLabel : 'Utama',
            tabBarIcon : ({tintColor}) => (
                <Icon name = "home" color = {tintColor} size = {28}/>
            )
        }
    },
    Financial : {
        screen : FinancialTopNav,
        navigationOptions : {
            tabBarLabel : 'Pencatatan',
            tabBarIcon : ({tintColor}) => (
                <Icon name = "file-invoice-dollar" color = {tintColor} size = {28}/>
            )
        }
    },
    User : {
        screen : UserStack,
        navigationOptions : {
            tabBarLabel : 'Akun',
            tabBarIcon : ({tintColor}) => (
                <Icon name = "user-alt" color = {tintColor} size = {28}/>
            )
        }
    }
}, {
    tabBarOptions : {
        activeTintColor : 'black',
        inactiveTintColor : 'white',
        style : {
            paddingTop : 5,
            borderTopColor : '#fff',
            shadowColor : '#a1aab8',
            backgroundColor : '#a56cc1',
            height : 50
        }
    }
})

export default BottomTab