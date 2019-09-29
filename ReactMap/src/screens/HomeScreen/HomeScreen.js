import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Avatar, SearchBar, Card } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { AddLocation } from '../../components';
import s from './styles';
import { colors } from '../../styles';

import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';

// FIXME: 表示がおかしくなる

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

var lat = 0 //36.983732
var lon = 0 //136.905862
var latDelta = 0.0922
var lonDelta = 0.0421

var turnOffRegionChange = false
var showButtonVar = false

var getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        resolve(pos)
      },
      err => {
        reject(err)
      }
    )
  })
}

class HomeScreenView extends React.Component {
    constructor(props) {
      console.log('constructor')
        super(props);
        turnOffRegionChange = true;
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
          search: '',
          markers: [
          /*
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
          */
          ],
          region: {
              latitude: lat,
              longitude: lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          },
        }

        this.myName = '';
        this.myID = '';
    }

    showButton = () => {
      if(showButtonVar) {
        //let myID = await AsyncStorage.getItem('myID');
        console.log('show button');
        return(
          <View style={s.addLocationPosition}>
            <AddLocation
              obtain={this.obtain}
              region={this.state.region}
              placeName={this.state.placeName}
              myID={parseInt(this.myID)}
            />
          </View>
        )
      } else {
        console.log('no button')
      }
    }

    obtain = (region) => {
      console.log(region)
    }

    onRegionChange = (region) => {
      this.setState({region});
    }

    returnMap = () => {
      if(turnOffRegionChange) {
        console.log('return map');
        return(
          <MapView
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapstyle}
              style={s.map}
              initialRegion={this.state.region}
              showsUserLocation={true}
              followUserLocation={true}
              onRegionChange={this.onRegionChange}
              liteMode={true}
              onRegionChangeComplete={
                () => {
                  console.log('onRegionChangeComplete');
                  this.forceUpdate();
                  //showButtonVar = true;
                }
              }
              onMapReady={
                () => {
                  console.log("map ready");
                }
              }
          >
              {this.state.markers.map((marker, index) => (
                  <MapView.Marker
                  key={index}
                  coordinate={
                    {
                      latitude: marker.latitude,
                      longitude: marker.longitude
                    }
                  }
                  latitudeDelta={marker.latitudeDelta}
                  longitudeDelta={marker.longitudeDelta}
                  />
                ))
              }
              <View style={s.centerMarker}></View>
          </MapView>
        )
      }
    }

    showAlert() {
      Alert.alert(
        'ログアウト',
        'ログアウトしますか？',
        [
          {
            text: 'キャンセル',
          },
          {
            text: 'OK',
            onPress: async () => {
              await AsyncStorage.removeItem('access_token');
              this.props.navigation.navigate('splash');
            }
          }
        ]
      )
    }

    async componentDidMount() {
      console.log('mounted');
      // 登録してあるランドマークを取得する処理群
      let url = 'https://afternoon-fortress-51374.herokuapp.com/locations';
      let tmpArray = [];
      this.myName = await AsyncStorage.getItem('myName');
      this.myID = await AsyncStorage.getItem('myID');

      await axios.get(url)
            .then(async res => {
              console.log(res.data.data);
              for(let i in res.data.data) {
                // 登録者IDが一致するもののみtmpArrayに保存する
                if(String(res.data.data[i].userid) == await AsyncStorage.getItem('myID')) {
                  tmpArray.push(res.data.data[i]);
                }
              }

              console.log(tmpArray);
              // 自分のランドマークをstateに保存する

              // 画面を現在位置に移動する処理群
              turnOffRegionChange = false;
              getCurrentLocation()
              .then(async pos => {
                console.log('get current location');
                if(pos) {
                  await this.setState({
                    region: {
                      latitude: pos.coords.latitude,
                      longitude: pos.coords.longitude,
                      latitudeDelta: latDelta,
                      longitudeDelta: lonDelta,
                    }
                  })
                }

                await this.setState({markers: tmpArray});

                turnOffRegionChange = true;
                //showButtonVar = true;

                showButtonVar = true;

                this.forceUpdate();
              })
            })
            .catch(e => {
              console.log(e)
            })
    }

    render() {
        return(
          <KeyboardAvoidingView
          style={s.container}
          behavior="padding"
          >
            <View style={s.container}>
                <View
                    style={{
                    flexDirection: 'row',
                    marginTop:35,
                    marginLeft:20,
                    marginBottom:15,
                    }}
                    >
                    <Avatar
                        size='large'
                        title='User'
                        titleStyle={{fontSize:20}
                        }
                        rounded
                        onPress={() => {this.showAlert()}}
                    />
                    <Text
                    style={{
                        fontSize:24,
                        marginLeft:14,
                        marginTop:5,
                    }}
                    >
                      {this.myName}
                    </Text>
                </View>
                <SearchBar
                    containerStyle={{
                        backgroundColor: colors.BGColor,
                        borderColor: colors.BGColor,
                    }}
                    placeholder="Search for"
                    onChangeText={query => {this.setState({search: query})}}
                    value={this.state.search}
                    round
                />
                { this.returnMap() }
                { this.showButton() }
            </View>
          </KeyboardAvoidingView>
        );
    }
}

export default HomeScreenView;