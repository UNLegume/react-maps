import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Animated } from 'react-native';
import axios from 'axios';

const buttonRadius = 60
const rectHeight = 170
const rectWidth = 380
const duration = 300

class AddLocation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            placeName: ''
        }
    }

    animatedHeight = new Animated.Value(60)
    animatedWidth = new Animated.Value(60)
    animatedBorderRadius = new Animated.Value(30)
    textInputHeight = new Animated.Value(1)

    buttonDisplay = "block";
    closeBtnDisplay = "none"

    buttonOnPress = () => {
        Animated.timing(
            this.animatedHeight, {
                toValue: rectHeight,
                duration: duration
            }
        ).start();

        Animated.timing(
            this.animatedWidth, {
                toValue: rectWidth,
                duration: duration,
            }
        ).start()

        Animated.timing(
            this.animatedBorderRadius, {
                toValue: 3,
                duration: duration
            }
        ).start()

        Animated.timing(
            this.textInputHeight, {
                toValue: 40,
                duration: duration
            }
        ).start()

        this.buttonDisplay = "none";
        this.closeBtnDisplay = "block";

        this.forceUpdate();
    }

    closeOnPress = () => {
        Animated.timing(
            this.animatedHeight, {
                toValue: buttonRadius,
                duration: duration
            }
        ).start()

        Animated.timing(
            this.animatedWidth, {
                toValue: buttonRadius,
                duration: duration
            }
        ).start()

        Animated.timing(
            this.animatedBorderRadius, {
                toValue: 30,
                duration: duration
            }
        ).start()

        this.closeBtnDisplay = "none";
        this.buttonDisplay = "block";

        this.forceUpdate();
    }

    post() {
        let url = 'https://thawing-earth-80470.herokuapp.com/locations';

        let params = new URLSearchParams();
        params.append('longitude', this.props.region.longitude)
        params.append('latitude', this.props.region.latitude)
        params.append('place', this.state.placeName)
        params.append('userid', 0)

        axios.post(url, params, {
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .then((res) => {
            console.log('received');
        })
        .catch((err) => {
            console.log(err)
        })

    }

    render() {
        return (
            <Animated.View style={{
                flex: 1,
                height: this.animatedHeight,
                width: this.animatedWidth,
                backgroundColor: "#FFFFFF",
                borderRadius: this.animatedBorderRadius,
            }}>
                <View style={{
                    display: this.closeBtnDisplay,
                    width: 50,
                    height: 50
                }}>
                    <Button
                    buttonStyle={{
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    }}
                    icon={
                        <Entypo
                        name="cross"
                        size={30}
                        color="#000"
                        />
                    }
                    onPress={() => {
                        this.closeOnPress();
                    }
                    }>
                    </Button>
                </View>

                <View
                style={{
                    display: this.closeBtnDisplay,
                    width: "100%",
                }}>
                    <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderColor: "#000",
                        borderWidth: 1,
                        fontSize: 30,
                    }}
                    onChangeText={(text) => {
                        this.state.placeName = text
                    }}
                    />

                    <Button
                    buttonStyle={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'black'
                    }}

                    onPress={() => {
                        this.post();
                    }}
                    />
                </View>

                <View
                style={{
                    display: this.buttonDisplay
                }}>
                    <Button
                    buttonStyle={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.ButtonYellow,
                        borderRadius: 30,
                    }}
                    icon={
                        <Entypo
                        name="location-pin"
                        size={30}
                        color="white"
                        />
                    }
                    onPress={() => {
                        this.buttonOnPress();
                        this.props.obtain(this.props.region.latitude);
                        this.props.obtain(this.props.region.longitude);
                        console.log('buttoooooooon');
                    }}
                    >
                    </Button>
                </View>
            </Animated.View>
        )
    }
}

export default AddLocation;