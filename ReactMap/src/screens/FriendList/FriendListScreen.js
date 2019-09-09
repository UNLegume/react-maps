import React from 'react';
import { View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class FriendListScreenView extends React.Component{
    render(){
        return(
        <View style={s.container}>
            <Card/>
        </View>
        );
    }
}

export default FriendListScreenView;