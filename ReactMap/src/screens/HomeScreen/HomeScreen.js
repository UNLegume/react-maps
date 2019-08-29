import React from 'react';
import { View, Button } from 'react-native';
import MapView from 'react-native-maps';
import s from './styles';

class HomeScreenView extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <MapView
                style = {s.map}
                />
                <Button
                title='MAP'
                color='#F00'
                />
            </View>
        );
    }
}

export default HomeScreenView;