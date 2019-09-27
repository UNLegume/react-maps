import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import s from './styles'

import { AsyncStorage } from 'react-native';

// 最初の起動画面
class SplashScreenView extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let url = 'https://afternoon-fortress-51374.herokuapp.com/auth'
        let access_token = await AsyncStorage.getItem('access_token');

        console.log(access_token)

        let params = new URLSearchParams();
        params.append('access_token', access_token)

        axios.post(url, params, {
            'Content-Type': 'application/json'
        })
        .then(async res => {
            console.log(res.data.data)
            await AsyncStorage.setItem('myEmail', res.data.data.email)
            await AsyncStorage.setItem('myID', String(res.data.data.id))
            await AsyncStorage.setItem('myName', res.data.data.name)

            this.props.navigation.navigate('main');
        })
        .catch(e => {
            //console.log(e)
            this.props.navigation.navigate('Login');
        })
    }

    render() {
        return(
            <View style={s.container}>
            </View>
        )
    }
}

export default SplashScreenView;