import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';

var url = 'https://afternoon-fortress-51374.herokuapp.com';

class IncomingScreenView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.userList = [];
        this.friendlist = [];
    }

    switchTab = () => {
        console.log('switch');
        this.props.navigation.navigate('friendList');
    }

    async acceptUser(id) {
        let myID = await AsyncStorage.getItem('myID');

        let params = new URLSearchParams();
        params.append('id', parseInt(myID));
        params.append('destinationID', id);

        axios.post(url + '/accept', params, {
            'Content-Type': 'application/json'
        })
        .then(res => {
            console.log(res);
            Alert.alert(
                '承認',
                'フレンド承認をしました',
                [
                    {
                        text: 'OK'
                    }
                ]
            )
            this.forceUpdate();
        })
        .catch(e => {
            console.log(e);
        })
    }

    searchUsers = () => {
        console.log('search: '+this.state.search);

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
            this.userList = res.data.data;
            this.forceUpdate();
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        var incoming = [];

        for(let i = 0; i < this.userList.length; i++){
            incoming.push(
                <ListItem
                key={i}
                title={this.userList[i].name}
                subtitle='Incoming'
                    containerStyle={{
                        backgroundColor:'#FFF',
                    }}
                bottomDivider={true}
                onPress={() => this.acceptUser(this.userList[i].id)}
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
            >incoming</Text>
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
                <View style={{marginVertical:12, marginLeft:30,}}>
                    <TouchableOpacity
                    onPress={() => this.switchTab()}>
                        <Text style={{fontSize:32, color:'#fff'}}>
                            Incoming Users
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop:-1 }}>
                    <ScrollView style={{
                        height: Dimensions.get('window').height - 255
                    }}>
                        { incoming }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default IncomingScreenView;