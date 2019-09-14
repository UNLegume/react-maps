import React from 'react';
import { View } from 'react-native';
import s from './styles';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';

class AddLocation extends React.Component {
    constructor(props){
        super(props);

        state = {};
    }
    render() {
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
                    this.props.obtain(this.props.region.latitude);
                    this.props.obtain(this.props.region.longitude);
                    console.log('buttoooooooon');
                }}
                >
                </Button>
            </View>
        )
    }
}

export default AddLocation;