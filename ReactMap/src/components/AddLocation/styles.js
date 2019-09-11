import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        width: 60,
    },
    button: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.ButtonYellow,
        borderRadius: 30,
    },
})

export default styles;