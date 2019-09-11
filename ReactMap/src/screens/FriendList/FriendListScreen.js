import React from 'react';
import { View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class FriendListScreenView extends React.Component{
    render(){
        var friendlist = [];

        for(let i = 0; i<10; i++){
            friendlist.push(
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
            >Friend</Text>
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
                <View style={{marginVertical:5,marginLeft:30,}}>
                    <Text style={{fontSize:24,color:'#fff'}}>Koyanagi</Text>
                    <Text style={{fontSize:18,color:'#fff',marginTop:5,}}>Recommend</Text>
                </View>
                <View style={{ marginTop:-1 }}>
                    { friendlist }
                </View>
            </View>
        </View>
        );
    }
}

export default FriendListScreenView;