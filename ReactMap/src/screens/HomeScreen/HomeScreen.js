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
                <View
                 style={{
                     flexDirection: 'row',
                     marginTop:40,
                     marginLeft:20,
                     marginBottom:20,
                    }}
                 >
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
                        marginTop:5,
                    }}
                    >
                        KoyanagiRyouta
                    </Text>
                </View>
                    <SearchBar
                        containerStyle={{
                            backgroundColor:colors.BGColor,
                            borderColor:colors.BGColor,
                            zIndex:2,
                        }}
                        placeholder="Search for"
                        onChangeText={this.updateSearch}
                        value={search}
                        li
                        round
                    />
                    <MapView
                        style = {s.map}
                    />
            </View>
        );
    }
}

export default HomeScreenView;