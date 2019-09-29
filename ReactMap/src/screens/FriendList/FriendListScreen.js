import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';
import axios from 'axios';

import { AsyncStorage } from 'react-native';

class FriendListScreenView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.userIDlist = [];
        this.friendlist = [];
        this.userList = [];
        this.myID = '';
    }

    // タブをクリックした時に切り替えるための関数
    switchTab = () => {
        console.log('switchTab');
        this.props.navigation.navigate('incoming');
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
        // ユーザー一覧を取得し, statusがtrueのもののみ表示する
        let url = 'https://afternoon-fortress-51374.herokuapp.com';
        this.myID = await AsyncStorage.getItem('myID');

        axios.get(url + '/relations')
        .then(res => {
            console.log(res.data.data);

            // まずユーザーのIDを取得する
            for (var i = 0; i < res.data.data.length; i++) {
                if(res.data.data[i].status) {
                    if(res.data.data[i].sourceID == parseInt(this.myID)) {
                        this.userIDlist.push(res.data.data[i].destinationID);
                    }
                    if(res.data.data[i].destinationID == parseInt(this.myID)) {
                        this.userIDlist.push(res.data.data[i].sourceID);
                    }
                }
            }

            i = 0;

            for(i = 0; i < this.userIDlist.length; i++) {
                // idからユーザーの情報を取得する
                // FIXME:
                console.log('ID:'+this.userIDlist[i])
                axios.get(url + '/users/' + this.userIDlist[i])
                .then(res => {
                    console.log(res.data.data);
                    this.friendlist.push(res.data.data);
                    this.forceUpdate();
                })
                .catch(e => {
                    console.log(e);
                })
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    sendFriendRequest = async (id) => {
        // フレンドリクエスト送信の関数
        let url = 'https://afternoon-fortress-51374.herokuapp.com';
        let myID = await AsyncStorage.getItem('myID');

        console.log(myID);
        console.log(id);

        let params = new URLSearchParams();
        // 自分のIDを引数に登録する
        params.append('id', parseInt(myID));
        params.append('destinationID', id);

        axios.post(url + '/relations', params, {
            'Content-Type': 'application/json'
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    componentDidUpdate() {
        console.log('updated');
    }

    render() {
        const {search} = this.state;
        this.userList = []

        for(let i = 0; i<this.friendlist.length; i++){
            this.userList.push(
                <ListItem
                key={i}
                title={this.friendlist[i].name}
                subtitle='Friend'
                containerStyle={{
                    backgroundColor:'#FFF',
                }}
                bottomDivider={true}
                // クリックイベントでフレンド申請を行う
                onPress={() => this.sendFriendRequest(this.friendlist[i].id)}
                />
            );
        }

        return(
        <View style={s.container}
            >
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
                backgroundColor: colors.BgColor,
                borderTopColor: 'rgba(0,0,0,0)',
                borderBottomColor: 'rgba(0,0,0,0)',
                marginTop: 5
            }}
            inputContainerStyle={{
                marginHorizontal:5,
            }}
            onSubmitEditing={this.searchUsers}
            placeholder="Search for"
            value={search}
            onChangeText={query => {this.setState({search: query})}}
            round
            />
            <View style={{
                backgroundColor:colors.OnBgColor,
                marginTop:10,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                }}>
                <View style={{marginVertical:12,marginLeft:30,}}>
                    <TouchableOpacity
                    onPress={() => {this.switchTab()}}>
                        <Text style={{fontSize:32,color:'#fff'}}>
                            Friend List
                        </Text>
                    </TouchableOpacity>
                    {/* <Text style={{fontSize:18,color:'#fff',marginTop:5,}}>Recommend</Text> */}
                </View>
                <View style={{ marginTop:-1 }}>
                    <ScrollView style={{
                        height: Dimensions.get('window').height - 255
                    }}>
                        { this.userList }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default FriendListScreenView;