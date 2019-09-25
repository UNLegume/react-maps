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
            for (var i in res.data.data) {
                if(res.data.data[i].status) {
                    this.userIDlist.push(res.data.data[i])
                }
            }

            
            this.friendlist = this.userIDlist;
            this.forceUpdate();
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