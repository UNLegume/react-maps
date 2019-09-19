import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';

import HomeScreenView from './src/screens/HomeScreen';
import LocationInfoScreenView from './src/screens/LocationInfo';
import FriendScreenView from './src/screens/FriendList';
import IncomingScreenView from './src/screens/Incoming';

import LoginView from './src/screens/LoginScreen';
import CreateAccountView from './src/screens/CreateAccount';
import CreateNewPasswardView from './src/screens/CreateNewPassward';
import SendEmailView from './src/screens/SendEmail';

import { colors } from './src/styles';


export default class App extends React.Component{
  render() {
    const MainTab = createBottomTabNavigator({
      Map:{screen: HomeScreenView},
      Friend: createBottomTabNavigator({
        friendList : {screen:FriendScreenView},
        incoming: {screen:IncomingScreenView}
      }),
      Location:{screen: LocationInfoScreenView},
    });

    const NavigatorTab = createAppContainer(
      createBottomTabNavigator({
        main: {screen: MainTab},
        Login: {screen: LoginView},
        Create: {screen: CreateAccountView},
        Forgot: {screen: CreateNewPasswardView},
        Mail: {screen: SendEmailView},
      })
    );

    return(
      <NavigatorTab/>
    )
  }
}
