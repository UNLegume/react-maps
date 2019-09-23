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

        this.friendlist = [];
    }

    searchFriends = () => {
        console.log('search: '+this.state.search);

        let url = 'https://thawing-earth-80470.herokuapp.com/search';

        let params = new URLSearchParams();
        params.append('searchtmp', this.state.search);

        axios.post(url, params, {
            'Content-Type': 'application/json'
        })
        .then(res => {
            this.friendlist = res.data
            console.log(this.friendlist);
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() {
        this.friendlist = [];
        const {search} =this.state;

        for(let i = 0; i<30; i++){
            this.friendlist.push(
                <ListItem
                key={i}
                title={String(i)}
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
            onSubmitEditing={this.searchFriends}
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
                        { this.friendlist }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}

export default FriendListScreenView;