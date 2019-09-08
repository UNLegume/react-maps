import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, SearchBar, Card } from 'react-native-elements';
import { MapView, Marker } from 'react-native-maps';
import s from './styles';
import { colors } from '../../styles';


class HomeScreenView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            markers: [
                {
                    latlng: {
                        latitude: 34.983732,
                        longitude: 136.905862,
                    },
                    title: 'marker1',
                    description: 'my badass place',
                },
            ],
        }
    }

    render() {
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
                    <Avatar
                        size='large'
                        title='User'
                        titleStyle={{fontSize:20}}
                        rounded
                    />
                    <Text
                    style={{
                        fontSize:24,
                        marginLeft:14,
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
                        }}
                        placeholder="Search for"
                        onChangeText={this.updateSearch}
                        value={search}
                        round
                    />
                    <MapView
                        style = {s.map}
                        initialRegion={{
                            latitude: 34.983732,
                            longitude: 136.905862,
                        }}
                    >
                        { this.state.markers.map(marker => (
                            <Marker
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                            />
                        )) }
                    </MapView>
            </View>
        );
    }
}

export default HomeScreenView;