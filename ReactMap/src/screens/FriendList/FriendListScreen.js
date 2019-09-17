import React from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class FriendListScreenView extends React.Component{
    render(){
        var friendlist = [];

        for(let i = 0; i<20; i++){
            friendlist.push(
                <ListItem
                key={i}
                title={i}
                subtitle='Recommend'
                    containerStyle={{
                        backgroundColor:'#FFF',
                    }}
                bottomDivider
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
            >Friend List</Text>
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
                flex:1,
                }}>
                <View style={{marginVertical:5,marginLeft:30,}}>
                    <Text style={{fontSize:24,color:'#fff'}}>Koyanagi</Text>
                    <Text style={{fontSize:18,color:'#fff',marginTop:5,}}>Recommend</Text>
                </View>
                <View style={{ marginTop:-1,flex:1 }}>
                    <ScrollView>
                        <SafeAreaView style={{flex:1}}>
                        { friendlist }
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default FriendListScreenView;