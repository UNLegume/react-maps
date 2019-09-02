import React from 'react';
import { View,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button, Input, Card, } from 'react-native-elements';
import s from './styles';
import { colors } from '../../styles';

class SendEmailScreenView extends React.Component{
    render(){
        return(
        <View style={s.container}>
            <Card
            titleStyle={{
                marginTop:10,
                marginBottom:10,
            }}
            containerStyle={{
                width:300,
                height:350,
                borderRadius:6,
                borderColor:colors.Divinder,
            }}
            title='Send an Email from our'
            >
                <View style={{
                    alignItems:"center",
                    marginVertical:20,
                }}>
                    <AntDesign name="mail" size={100}/>
                </View>
                <Input
                placeholder='Phone number or E-mail'
                />
                <Input
                placeholder='Comfirm'
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
                title="Send"   
            />
            <Button
            buttonStyle={{
                marginLeft:260,
                marginTop:20,
            }}
            titleStyle={{
                color:colors.SubTextW,
            }}
            title='Back'
            type='clear'
            />
        </View>
        );
    }
}

export default SendEmailScreenView;