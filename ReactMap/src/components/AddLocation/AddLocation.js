import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Animated } from 'react-native';
import axios from 'axios';

const buttonRadius = 60
const rectHeight = 170
const rectWidth = 300
const duration = 300

class AddLocation extends React.Component {
    constructor(props){
        console.log('addLocation constructor');
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

    sleep(waitMsec) {
        var startMsec = new Date();

        // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        while (new Date() - startMsec < waitMsec);
    }

    post() {
        console.log(this.props.myID);
        console.log('add')
        let url = 'https://afternoon-fortress-51374.herokuapp.com/locations';

        let params = new URLSearchParams();
        params.append('longitude', this.props.region.longitude)
        params.append('latitude', this.props.region.latitude)
        params.append('place', this.state.placeName)
        params.append('userid', this.props.myID)

        axios.post(url, params, {
            'Content-Type': 'application/json'
        })
        .then((res) => {
            this.setState({placeName: ''});
            this.textInput.clear();
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
                    }}
                    >
                    </Button>
                </View>

                <View
                style={{
                    display: this.closeBtnDisplay,
                    width: "100%",
                }}>
                    <TextInput
                    style={{
                        position: "relative",
                        height: 40,
                        width: "80%",
                        left: "10%",
                        borderColor: "#000",
                        borderWidth: 1,
                        fontSize: 30,
                        borderRadius: 15,
                        textAlign: "center",
                    }}
                    onChangeText={(text) => {
                        this.state.placeName = text
                    }}
                    ref={input => {
                        this.textInput = input
                    }}
                    />

                    <Button
                    buttonStyle={{
                        position: "absolute",
                        width: 80,
                        height: 40,
                        top: 20,
                        right: 20,
                        backgroundColor: "#F8F753",
                        borderRadius: 15
                    }}

                    title="ADD"

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
                        this.props.obtain(this.props.region.latitude);
                        this.props.obtain(this.props.region.longitude);
                        this.buttonOnPress();
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