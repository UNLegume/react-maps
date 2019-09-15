import React from 'react';
import { View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button, Input, Card, } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class CreateNewPasswardScreenView extends React.Component{
    render() {
        return(
        <View style={s.container}>
            <Card
            titleStyle={{
                marginTop:10,
                marginBottom:10,
            }}
            containerStyle={{
                width:300,
                height:210,
                borderRadius:6,
                borderColor:colors.Divinder,
            }}
            title='Enter Your New Password'
            >
                <Input
                placeholder='UserName'
                />
                <Input
                placeholder='PassWord'
                inputStyle={{marginTop:20}}
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

export default CreateNewPasswardScreenView;