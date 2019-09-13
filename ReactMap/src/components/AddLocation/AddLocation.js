import React from 'react';
import { View } from 'react-native';
import s from './styles';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';

const AddLocation = ({
    obtain,
    region = 'region'
}) =>  {
    return (
        <View style={s.container}>
            <Button
            buttonStyle={s.button}
            icon={
                <Entypo
                name="location-pin"
                size={30}
                color="white"
                />
            }
            onPress={() => {
                obtain(region.latitude);
                obtain(region.longitude);
                console.log('buttoooooooon');
            }}
            >
            </Button>
        </View>
    )
}

export default AddLocation;