import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Card, } from 'react-native-elements';
import axios from 'axios';
import s from './styles';
import { colors } from '../../styles';

import { AsyncStorage, Alert } from 'react-native';

class LoginScreenView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    email = (text) => {
        this.setState({email: text});
    };

    password = (text) => {
        this.setState({password: text});
    }

    showAlert = () => {
        Alert.alert(
            'ログイン失敗',
            'パスワードまたはメールアドレスが間違っています。',
            [
                {text: 'OK'}
            ]
        )
    }

    login = () => {
        let url = 'https://afternoon-fortress-51374.herokuapp.com/login';

        let params = new URLSearchParams();
        params.append('email', this.state.email)
        params.append('password', this.state.password)

        axios.post(url, params,
        {
            'Content-Type': 'application/json'
        })
        .then(async res => {
            console.log(res.data.data);

            // ログイン時の例外処理
            if(res.data.data.error != "Invalid request") {
                await AsyncStorage.setItem('access_token', res.data.data.access_token);
                await AsyncStorage.setItem('refresh_token', res.data.data.refresh_token);
                await AsyncStorage.setItem('expires_in', String(res.data.data.expires_in));

                this.props.navigation.navigate('splash');
            }
            else {
                this.showAlert();
            }

        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
        <View style={s.container}>
            <Avatar
            containerStyle={{
                marginBottom:30,
            }}
            size='large'
            title='User'
            titleStyle={{fontSize:20}}
            rounded
            />

            <Card
            containerStyle={{
                width:300,
                height:150,
                borderRadius:6,
                borderColor:colors.Divinder,
            }}
            >
                <Input
                placeholder='email'
                onChangeText={(text)=>this.email(text)}
                />
                <Input
                placeholder='password'
                onChangeText={(text)=>this.password(text)}
                inputStyle={{marginTop:20}}
                secureTextEntry={true}
                />
            </Card>

            {/* loginButton */}
            <Button
                titleStyle={{
                    color:colors.white,
                }}
                buttonStyle={{
                    backgroundColor:colors.ButtonYellow,
                    marginTop:20,
                    width:300,
                    borderRadius:6
                }}
                title="Login"
                onPress={this.login}
            />

            {/* ForgotButton */}
            <Button
            buttonStyle={{
                marginLeft:150,
                marginTop:10,
            }}
            titleStyle={{
                color:colors.SubTextW,
            }}
            title='Create your acount?'
            type="clear"
            onPress={() =>this.props.navigation.navigate('Create')}
            />
            <Button
            buttonStyle={{
                marginLeft:160,
                marginTop:5,
            }}
            titleStyle={{
                color:colors.SubTextW,
            }}
            title='Forgot Password?'
            type='clear'
            onPress={() =>this.props.navigation.navigate('Forgot')}
            />
        </View>
        );
    }
}

export default LoginScreenView;