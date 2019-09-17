import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Card, Input, CheckBox} from 'react-native-elements';
import axios from 'axios';
import s from './styles';
import { colors } from '../../styles';

class CreateAccountScreenView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:false,
            UserName:'',
            Email:'',
            Pass:'',
            Comfirm:'',
        };
    };

    Accept = () => {
        this.setState(prevState => {
        return { checked: !prevState.checked }
        })
    };

    UserName = (text) =>{
        this.setState({UserName: text});
    };

    Email = (text) =>{
        this.setState({Email: text});
    }

    Pass = (text) =>{
        this.setState({Pass:text});
    }

    Comfirm = (text) =>{
        this.setState({Comfirm:text});
    }

    UserInfo = () =>{
        let params = new URLSearchParams();
        params.append('name',this.state.UserName);
        params.append('email',this.state.Email);
        params.append('password',this.state.Pass);
        console.log('append');

        axios
        .post('https://thawing-earth-80470.herokuapp.com/users',params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(function(response){
            console.log('a');
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <View style={s.container}>
                <Avatar
                    containerStyle={{
                        marginBottom:20,
                    }}
                    size='large'
                    title='User'
                    titleStyle={{fontSize:20}}
                    rounded
                />

                <Card
                    containerStyle={{
                        width:300,
                        height:340,
                        borderRadius:6,
                        borderColor:colors.Divinder,
                    }}
                >
                    <Input
                        placeholder='User Name'
                        onChangeText={(text)=>this.UserName(text)}
                    />

                    <Input
                        placeholder='Email'
                        onChangeText={(text)=>this.Email(text)}
                        inputStyle={{marginTop:20}}
                    />
                    <Input
                        placeholder='Password'
                        onChangeText={(text)=>this.Pass(text)}
                        inputStyle={{marginTop:20}}
                    />
                    <Input
                        placeholder='Comfirm'
                        onChangeText={(text)=>this.Comfirm(text)}
                        inputStyle={{marginTop:20}}
                    />
                    <CheckBox
                        containerStyle={{
                            marginTop:20,
                        }}
                        title='Accept Term Service'
                        checked={this.state.checked}
                        onPress = {this.Accept}
                    />

                </Card>
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
                    title="Create"
                    onPress = {this.UserInfo}
                />
                <Button
                    buttonStyle={{
                        marginLeft:260,
                        marginTop:10,
                    }}
                    titleStyle={{
                        color:colors.SubTextW,
                    }}
                    title='Back'
                    type="clear"
                    onPress={() =>this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default CreateAccountScreenView;