import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Card, } from 'react-native-elements';
import axios from 'axios';
import s from './styles';
import { colors } from '../../styles';

import { AsyncStorage } from 'react-native';

class LoginScreenView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    email = (text) =>{
        this.setState({UserName: text});
    };

    password = (text) =>{
        this.setState({Pass:text});
    }

    login = () =>{
        let params = new URLSearchParams();
        params.append('user', {'email': this.state.email, 'password': this.state.password})

        axios
        .post('https://thawing-earth-80470.herokuapp.com/login', params,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
            AsyncStorage.setItem('auth_key', res.data);
            ()=>this.props.navigation.navigate('Friend')
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
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