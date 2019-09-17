import React from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import  axios  from 'axios';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, ListItem ,SearchBar, Divider } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class LocationInfoScreenView extends React.Component{
    state = {
        inputText: '',
    }

    onChangeText(text){
        axios
            .get('https://thawing-earth-80470.herokuapp.com/users',{params:{name:text}})
            .then(
                response => {
                    console.log(response);
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );
            this.setState({inputText:text})    
    }

    render(){
        const { inputText } = this.state;
        var Locationlist = [];


        for(let i = 0; i<30; i++){
            Locationlist.push(
                <ListItem
                title={i}
                key={i}
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
            onChangeText={ text => this.onChangeText(text)}
            value={inputText}
            round
            />
            <View style={{
                backgroundColor:colors.OnBgColor,
                marginTop:10,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                flex:1
                }}>
                <View style={{ marginTop:70,flex:1, }}>
                    <ScrollView>
                        <SafeAreaView>
                            { Locationlist }
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>
        </View>
        );
    }
}


export default LocationInfoScreenView;