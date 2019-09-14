import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Card, } from 'react-native-elements';
import axios from 'axios';
import s from './styles';
import { colors } from '../../styles';

class LoginScreenView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            UserName:'',
            Pass:'',
        };
    };

    UserName = (text) =>{
        this.setState({UserName: text});
    };

    Pass = (text) =>{
        this.setState({Pass:text});
    }

    Login = () =>{
        axios
            .get('https://thawing-earth-80470.herokuapp.com/users',{
                params:{
                    UserName:'aaa',
                    Pass:'d;alkdjf;al',
                }
            })
            .then(function(){
                console.log('good');
                ()=>this.props.navigation.navigate('Friend')
            })
            .catch(function(error){
                console.log(error);
            });
            // .finally(function(){
                
            // });
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
                placeholder='UserName'
                onChangeText={(text)=>this.UserName(text)}
                />
                <Input
                placeholder='PassWord'
                onChangeText={(text)=>this.Pass(text)}
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
                onPress={()=>this.props.navigation.navigate('Friend')}
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