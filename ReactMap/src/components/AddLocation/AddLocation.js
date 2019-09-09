import React from 'react';
import View from 'react-native';
import s from './styles';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';

const AddLocation = ({
    obtain,
    region = 'region'
}) =>  {
    return (
        <Button
        buttonStyle={s.container}
        // icon={
        //     <Entypo
        //     name="location-pin"
        //     size={30}
        //     color="white"
        //     />
        // }
        title={
            <Entypo
            name="location-pin"
            size={30}
            color="white"
            />
        }
        onPress={() => {
            obtain(region.latitude);
            console.log('buttoooooooon');
        }}
        >
        </Button>
    )
}

export default AddLocation;