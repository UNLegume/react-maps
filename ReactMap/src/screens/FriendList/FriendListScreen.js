import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, SearchBar, ListItem, Divider} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';
import axios from 'axios';

class FriendListScreenView extends React.Component {
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

    componentDidMount() {
        // ユーザー一覧を取得し, statusがtrueのもののみ表示する
        let url = 'https://afternoon-fortress-51374.herokuapp.com';
        axios.get(url + '/relations')
        .then(res => {
            console.log(res.data.data);

            // まずユーザーのIDを取得する
            for (var i in res.data.data) {
                if(res.data.data[i].status) {
                    // フレンドの者だけuserIDlistに格納する
                    // FIXME: 自分のIDから見たフレンドのみ追加しなくてはならない
                    this.userIDlist.push(res.data.data[i])
                }
            }

            i = 0;

            for(i in this.userIDlist) {
                // idからユーザーの情報を取得する
                // FIXME:
                console.log('ID:'+this.userIDlist[i].destinationID)
                axios.get(url + '/users/' + this.userIDlist[i].destinationID)
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

    componentDidUpdate() {
        console.log('updated');
    }

    render() {
        const {search} = this.state;
        let tmpList = []

        for(let i = 0; i<this.friendlist.length; i++){
            tmpList.push(
                <ListItem
                key={i}
                title={this.friendlist[i].name}
                subtitle='Friend'
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
                    <Text style={{fontSize:32,color:'#fff'}}>Koyanagi</Text>
                    {/* <Text style={{fontSize:18,color:'#fff',marginTop:5,}}>Recommend</Text> */}
                </View>
                <View style={{ marginTop:-1 }}>
                    <ScrollView style={{

                    }}>
                        { tmpList }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default FriendListScreenView;