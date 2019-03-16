import React, { Component } from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Root, Icon, View, Text } from 'native-base';

import PokemonsList from '../../screens/pokemon_guest/PokemonsList'
import PokemonDetails from '../../screens/pokemon_guest/PokemonDetails'
import PokemonLogin from '../../screens/pokemon_user/PokemonLogin'
import PokemonRegister from '../../screens/pokemon_user/PokemonRegister'
import PokemonMap from '../../screens/pokemon_user/PokemonMap'
import PokemonAdd from '../../screens/pokemon_user/PokemonAdd'
import PokemonPatch from '../../screens/pokemon_user/PokemonPatch'
import PokemonSplash from '../../screens/pokemon_guest/PokemonSplash'


const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons
    let iconName
    if (routeName === 'Home') {
        iconName = `md-home${focused ? '' : ''}`
    } else if (routeName === 'Map') {
        iconName = `md-map${focused ? '' : ''}`
    }
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={26} color={tintColor} />
}



const TabScreen = createBottomTabNavigator(
    {
        Home: {
            screen: PokemonsList,
        },
        Map: {
            screen: PokemonMap,
        }
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#E91E63',
            inactiveTintColor: '#e0e0e0',
            showIcon: true,
            showLabel: true,
            style: {
                backgroundColor: '#FFFFFF',
            },
            indicatorStyle: {
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 2,
            },
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
    }
)

const StackNavigator = createStackNavigator({
    PokemonTabsScreen: {
        screen: TabScreen,
        navigationOptions: {
            header: null
        }
    },
    PokemonDetails: {
        screen: PokemonDetails,
        navigationOptions: {
            title: 'Pokemon Details'
        }
    },
    PokemonRegister: {
        screen: PokemonRegister,
        navigationOptions: {
            header: null
        }
    },
    PokemonLogin: {
        screen: PokemonLogin,
        navigationOptions: {
            header: null
        }
    },
    PokemonAdd: {
        screen: PokemonAdd,
        navigationOptions: {
            title: 'Add New Pokemon'
        }
    },
    PokemonPatch: {
        screen: PokemonPatch,
        navigationOptions: {
            title: 'Edit Pokemon'
        }
    },
},
    {
        headerMode: ''
    }
)

const AppSplash = createStackNavigator({
    PokemonSplash: { screen: PokemonSplash }
})

const RootNavigator = createSwitchNavigator({
    PokemonSplash: { screen: AppSplash },
    StackNavigator: { screen: StackNavigator },
})

export default createAppContainer(RootNavigator);

