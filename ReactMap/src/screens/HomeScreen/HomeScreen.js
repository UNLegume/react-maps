import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, SearchBar, Card } from 'react-native-elements';
import MapView from 'react-native-maps';
import s from './styles';
import { colors } from '../../styles';


class HomeScreenView extends React.Component{
    state = {
        search:'',
        userName:'aaaaaaaaaaaaaa',
    };

    updateSearch = search =>{
        this.setState({search});
    };

    render(){
    const { search } = this.state.search;
    // const { userName } = this.state.userName;

        return(
            <View style={s.container}>
                <View style={{
                    flexDirection:'row',
                    marginTop:30,
                    marginLeft:10,
                    marginBottom:15,
                }}>
                {/* <Avatar
                    size='large'
                    title='User'
                    titleStyle={{fontSize:20}}
                    rounded
                /> */}
                <Text
                style={{
                    fontSize:24,
                    marginLeft:5,
                    marginTop:40,
                    color:'#FFF',
                }}
                >
                    KoyanagiRyouta
                </Text>
                </View>
                <View style={{marginTop:32,flex:1}}>
                    <SearchBar
                        containerStyle={{
                            backgroundColor:colors.OnBgColor,
                            borderTopColor:'rgba(0,0,0,0)',
                            borderBottomColor:'rgba(0,0,0,0)',
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20,
                        }}
                        inputContainerStyle={{
                            margin:10,
                        }}
                        placeholder="Search for"
                        onChangeText={this.updateSearch}
                        value={search}
                        round
                    />
                    <MapView
                        style = {s.map}
                    />
                </View>
            </View>
        );
    }
}

export default HomeScreenView;