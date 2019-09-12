import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Card, Input, CheckBox} from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class CreateAccountScreenView extends React.Component{
    state = {
        checked:false,
    };

    Accept = ( checked ) => {
        this.setState(prevState => {
        return { checked: !prevState.checked }
        })
    };

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
                        height:260,
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
                    <Input
                        placeholder='Comfirm'
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