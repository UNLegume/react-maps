import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, ListItem ,SearchBar, Divider } from 'react-native-elements';
import s from './styles';
import axios from 'axios';
import { colors } from '../../styles';

import { AsyncStorage } from 'react-native';

class LocationInfoScreenView extends React.Component{
    constructor(props) {
        super(props);

        this.locationList = [];
    }

    async componentDidMount() {
        console.log('---------------------------------------')
        // ロケーション一覧を取得する
        let url = 'https://afternoon-fortress-51374.herokuapp.com';
        let myID = await AsyncStorage.getItem('myID');
        console.log(myID);
        let tmpArray = [];

        axios.get(url + '/locations')
        .then(res => {
            // locationテーブルから値の配列を取得する

            for(let i in res.data.data) {
                if(res.data.data[i].userid == myID) {
                    // locationテーブルから取得したデータを配列に格納していく
                    tmpArray.push(res.data.data[i]);
                }
            }

            console.log(tmpArray);
            this.locationList = tmpArray;
            this.forceUpdate();
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        var Locationlist = [];

        for(let i = 0; i < this.locationList.length; i++){
            Locationlist.push(
                <ListItem
                title={this.locationList.place}
                key={i}
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
                    <ScrollView>
                    { Locationlist }
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}


export default LocationInfoScreenView;