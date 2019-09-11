import React from 'react';
import { View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, ListItem ,SearchBar, Divider } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class LocationInfoScreenView extends React.Component{
    render(){
        var Locationlist = [];

        for(let i = 0; i<10; i++){
            Locationlist.push(
                <ListItem
                key={i}
                title='aaaa'
                containerStyle={{
                    backgroundColor:'#FFF',
                }}
                bottomDivider='true'
                />
            );
        }
        return(
        <View style={s.container}>
            <Text
             style={{
                 fontSize:24,
                 marginTop:40,
                 marginLeft:20,
                 marginBottom:5,
                 color:'#FFF',
             }}
            >Location</Text>
            <SearchBar
             containerStyle={{
                backgroundColor:colors.BgColor,
                borderTopColor:'rgba(0,0,0,0)',
                borderBottomColor:'rgba(0,0,0,0)',
                marginTop:5,
             }}
             inputContainerStyle={{
                marginHorizontal:5,
             }}
             placeholder="Search for"
            //  onChangeText={this.updateSearch}
            //  value={search}
             round
            />
            <View style={{
                backgroundColor:colors.OnBgColor,
                marginTop:10,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                }}>
                <View style={{ marginTop:70 }}>
                    { Locationlist }
                </View>
            </View>
        </View>
        );
    }
}


export default LocationInfoScreenView;