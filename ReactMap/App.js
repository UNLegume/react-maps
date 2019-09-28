import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import HomeScreenView from './src/screens/HomeScreen';
import LocationInfoScreenView from './src/screens/LocationInfo';
import FriendScreenView from './src/screens/FriendList';
import IncomingScreenView from './src/screens/Incoming';

import LoginView from './src/screens/LoginScreen';
import CreateAccountView from './src/screens/CreateAccount';
import CreateNewPasswardView from './src/screens/CreateNewPassward';
import SendEmailView from './src/screens/SendEmail';
import SplashScreen from './src/screens/SplashScreen';

import { colors } from './src/styles';

//import { AsyncStorage } from 'react-native';
//import { SplashScreen } from 'expo';

export default class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const MainTab = createBottomTabNavigator(
      {
        Map: {
          screen: HomeScreenView,
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
              <Entypo
              name="map"
              color={tintColor}
              size={25}
              />
            )
          })
        },
        Friend: {
          screen: createSwitchNavigator({
            friendList : {
              screen: FriendScreenView
            },
            incoming: {
              screen: IncomingScreenView
            }
          }),
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
              <Entypo
              name="users"
              color={tintColor}
              size={25}
              />
            )
          })
        },
        Location: {
          screen: LocationInfoScreenView,
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
              <Entypo
              name="location"
              color={tintColor}
              size={25}
              />
            )
          })
        },
      },
      {
        tabBarOptions: {
          style: {
            backgroundColor: colors.ButtonYellow
          },
          showLabel: false
        }
      }
    );

    const NavigatorTab = createAppContainer(
      createSwitchNavigator({
        splash: {
          screen: SplashScreen
        },
        main: {
          screen: MainTab
        },
        Login: {
          screen: LoginView
        },
        Create: {
          screen: CreateAccountView
        },
        Forgot: {
          screen: CreateNewPasswardView
        },
        Mail: {
          screen: SendEmailView
        },
      })
    );

    return(
      <NavigatorTab/>
    )
  }
}
