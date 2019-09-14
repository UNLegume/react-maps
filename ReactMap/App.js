

// import React from 'react';
// import { View, Text, Button} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class LoginScreen extends React.Component {
//   render() {
//     return (
//         <LoginScreenView/>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Details Screen</Text>
//         </View>
//       );
//     }
//   }
//   const AppNavigator = createStackNavigator(
//     {
//       Login: LoginScreen,
//       Details: DetailsScreen,
//     },
//     {
//       initialRouteName: 'Login',
//     }
//   );

// export default createAppContainer(AppNavigator);



import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

import FriendListView from './src/screens/FriendList';
import HomeScreenView from './src/screens/HomeScreen';
import LocationInfoView from './src/screens/LocationInfo';

import LoginView from './src/screens/LoginScreen';
import CreateAccountView from './src/screens/CreateAccount';
import CreateNewPasswardView from './src/screens/CreateNewPassward';
import SendEmailView from './src/screens/SendEmail';

import { colors } from './src/styles';
import FriendScreenView from './src/screens/FriendList';
import LocationInfoScreenView from './src/screens/LocationInfo';

export default class App extends React.Component{
  render(){
    const MainTab = createBottomTabNavigator({
      Friend: createBottomTabNavigator({
        friendList : {screen:FriendScreenView},
        incoming: {screen:LocationInfoScreenView}
      }),
      Map:{screen: HomeScreenView},
      Location:{screen: LocationInfoScreenView},
    });

    const NavigatorTab = createAppContainer(
      createSwitchNavigator({
        Login: {screen: LoginView},
        Create: {screen: CreateAccountView},
        Forgot: {screen: CreateNewPasswardView},
        Mail: {screen: SendEmailView},
        main: {screen: MainTab},
      })
    );
    
    return(
      <NavigatorTab/>
    )
  }
}
