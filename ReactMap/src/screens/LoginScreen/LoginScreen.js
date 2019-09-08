import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Card, } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class LoginScreenView extends React.Component{
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
                placeholder='UserName'
                />
                <Input
                placeholder='PassWord'
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
            />
        </View>
        );
    }
}

export default LoginScreenView;