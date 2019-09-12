

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
import { createAppContainer } from 'react-navigation';
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
    const NavigatorTab = createAppContainer(
      createBottomTabNavigator({
        Login: {screen: LoginView},
        Create: {screen: CreateAccountView},
        Forgot: {screen: CreateNewPasswardView},
        Mail: {screen: SendEmailView},
        main: createBottomTabNavigator({
          Friend: {screen: FriendScreenView},
          Location:{screen: LocationInfoScreenView},
          Map:{screen: HomeScreenView},
        })
      })
    );

    return(
      <NavigatorTab/>
    )
  }
}

// //Tabs
// class HomeScreen extends React.Component {
//   render() {
//     return (
//         <HomeScreenView/>
//     );
//   }
// }

// class FriendListScreen extends React.Component {
//   render() {
//     return (
//         <FriendListView/>
//     );
//   }
// }

// class LocationInfoScreen extends React.Component {
//     render() {
//       return (
//         <LocationInfoView/>
//       );
//     }
//   }
// //////////////////////////////////////////////////////////////

// //Initial Pages
// class LoginScreen extends React.Component{
//   render(){
//     return(
//       <LoginView/>
//     );
//   }
// }

// class CreateAccountScreen extends React.Component{
//   render(){
//     return(
//       <CreateAccountView/>
//     );
//   }
// }

// class CreateNewPasswardScreen extends React.Component{
//   render(){
//     return(
//       <CreateNewPasswardView/>
//     );
//   }
// }

// class SendEmailScreen extends React.Component{
//   render(){
//     return(
//       <SendEmailView/>
//     );
//   }
// }
// ///////////////////////////////////////////////////////////////

// const TabNavigator = createBottomTabNavigator(
//     {
//         Map: HomeScreen,
//         Friend: FriendListScreen,
//         Location:LocationInfoScreen,
//     },
//     {
//         initialRouteName:'Friend',
//         defaultNavigationOptions:({navigation}) => ({
//             tabBarIcon:()=> {
//                 const { routeName } = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 if(routeName === 'Map'){
//                     iconName = 'md-map';
//                 }
//                 else if(routeName === 'Friend'){
//                     iconName = 'ios-star';
//                 }
//                 else if(routeName === 'Location'){
//                     iconName = 'place';
//                     IconComponent = MaterialIcons;
//                 }

//                 return <IconComponent name={iconName} size={25}/>
//             },
//         }),
//     }
// );

// export default createAppContainer(TabNavigator);
