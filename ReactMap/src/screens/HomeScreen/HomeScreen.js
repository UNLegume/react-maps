import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, SearchBar, Card } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { AddLocation } from '../../components';
import s from './styles';
import { colors } from '../../styles';

mapstyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
    ]
class HomeScreenView extends React.Component {
    constructor(props) {
        super(props);
        this.getInitialState();
        this.state = {
            search: '',
            markers: [
                {
                    latlng: {
                        latitude: 34.983732,
                        longitude: 136.905862,
                    },
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                },
                {
                    latlng: {
                        latitude: 35.983732,
                        longitude: 137.905862,
                    },
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }
            ],
            region: {
                latitude: 34.983732,
                longitude: 136.905862,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    obtain = (region) => {
        console.log(region);
    }

    getInitialState = () => {
        return {
            region: {
                latitude: 34.983732,
                longitude: 136.905862,
                latitudeDelta: 0.0092,
                longitudeDelta: 0.0042,
            },
        }
    }

    onRegionChange = (region) => {
        this.setState({ region });
        console.log(region);
    }

    render() {
        navigator.geolocation.getCurrentPosition(
            pos => console.log(pos.coords.latitude),
            err => console.log(err)
        )

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
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapstyle}
                    style={s.map}
                    initialRegion={{
                        latitude: 34.983732,
                        longitude: 136.905862,
                        latitudeDelta: 0.0092,
                        longitudeDelta: 0.0042,
                    }}
                    onRegionChange={this.onRegionChange}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                        coordinate={marker.latlng}
                        latitudeDelta={marker.latitudeDelta}
                        longitudeDelta={marker.longitudeDelta}
                        />
                    ))}

                    <View style={s.addLocationPosition}>
                        <AddLocation
                        obtain={this.obtain}
                        region={this.state.region}
                        />
                    </View>
                </MapView>
            </View>
        );
    }
}

export default HomeScreenView;