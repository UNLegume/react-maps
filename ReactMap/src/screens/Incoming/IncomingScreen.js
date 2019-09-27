import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

import axios from 'axios';
import { AsyncStorage } from 'react-native';

class IncomingScreenView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.userIDlist = [];
        this.friendlist = [];
    }

    searchUsers = () => {
        console.log('search: '+this.state.search);

        let url = 'https://afternoon-fortress-51374.herokuapp.com';

        axios.get(url + '/search?word=' + this.state.search)
        .then(res => {
            this.friendlist = res.data
            console.log(this.friendlist);
            this.forceUpdate();
        })
        .catch(e => {
            console.log(e);
        })
    }

    async componentDidMount() {
        console.log('--------------------------------------------');
        let url = 'https://afternoon-fortress-51374.herokuapp.com';
        let myID = await AsyncStorage.getItem('myID');

        // 自分のIDに対しての申請を取得する
        axios.get(url + '/incoming?id='+myID)
        .then(res => {
            console.log(res.data);
            this.userIDlist = res.data.data
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        var Incoming = [];

        for(let i = 0; i < this.userIDlist.length; i++){
            Incoming.push(
                <ListItem
                key={i}
                title={String(i)}
                subtitle='Incoming'
                    containerStyle={{
                        backgroundColor:'#FFF',
                    }}
                bottomDivider={true}
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
            >Incoming</Text>
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
                    <Text style={{fontSize:24,color:'#fff',marginVertical:15}}>Add Friend</Text>
                </View>
                <View style={{ marginTop:-1 }}>
                    <ScrollView style={{

                    }}>
                        { Incoming }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default IncomingScreenView;