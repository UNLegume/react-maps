import React from 'react';
import { View } from 'react-native';
import s from './styles';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';
import { Animated } from 'react-native';

class AddLocation extends React.Component {
    constructor(props){
        super(props);
    }

    animatedHeight = new Animated.Value(60)
    animatedWidth = new Animated.Value(60)
    animatedBorderRadius = new Animated.Value(30)

    buttonDisplay = "block";
    closeBtnDisplay = "none"

    buttonOnPress = () => {
        Animated.timing(
            this.animatedHeight, {
                toValue: 170,
                duration: 300
            }
        ).start();

        Animated.timing(
            this.animatedWidth, {
                toValue: 380,
                duration: 300,
            }
        ).start()

        Animated.timing(
            this.animatedBorderRadius, {
                toValue: 3,
                duration: 300
            }
        ).start()

        this.buttonDisplay = "none";
        this.closeBtnDisplay = "block";

        this.forceUpdate();
    }

    closeOnPress = () => {
        Animated.timing(
            this.animatedHeight, {
                toValue: 60,
                duration: 300
            }
        ).start()

        Animated.timing(
            this.animatedWidth, {
                toValue: 60,
                duration: 300
            }
        ).start()

        Animated.timing(
            this.animatedBorderRadius, {
                toValue: 30,
                duration: 300
            }
        ).start()

        this.closeBtnDisplay = "none";
        this.buttonDisplay = "block";

        this.forceUpdate();
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
                    display: this.closeBtnDisplay
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
                <View style={{
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