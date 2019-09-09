
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
import { Ionicons, MaterialIcons} from '@expo/vector-icons';

import FriendListView from './src/screens/FriendList';
import HomeScreenView from './src/screens/HomeScreen';
import LocationInfoView from './src/screens/LocationInfo';
import { colors } from './src/styles';

class HomeScreen extends React.Component {
  render() {
    return (
        <HomeScreenView/>
    );
  }
}

class FriendListScreen extends React.Component {
  render() {
    return (
        <FriendListView/>
    );
  }
}

class LocationInfoScreen extends React.Component {
    render() {
      return (
          <LocationInfoView/>
      );
    }
  }

const TabNavigator = createBottomTabNavigator(
    {
        Map: HomeScreen,
        Friend: FriendListScreen,
        Location:LocationInfoScreen,
    },
    {
        initialRouteName:'Friend',
        defaultNavigationOptions:({navigation}) => ({
            tabBarIcon:()=> {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if(routeName === 'Map'){
                    iconName = 'md-map';
                }
                else if(routeName === 'Friend'){
                    iconName = 'ios-star';
                }
                else if(routeName === 'Location'){
                    iconName = 'place';
                    IconComponent = MaterialIcons;
                }

                return <IconComponent name={iconName} size={25}/>
            },
        }),
        // tabBarOptions:{
        //   style={
        //     backgroundColor:colors.ButtonYellow,
        //   }
        // }
    }
);

export default createAppContainer(TabNavigator);