
// import CreateAccountView from './src/screens/CreateAccount';
// import CreateNewPasswardView from './src/screens/CreateNewPassward';
// import SendEmailView from './src/screens/SendEmail';

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
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreenView from './src/screens/HomeScreen';
import LoginScreenView from './src/screens/LoginScreen';

class HomeScreen extends React.Component {
  render() {
    return (
        <HomeScreenView/>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
        <LoginScreenView/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);