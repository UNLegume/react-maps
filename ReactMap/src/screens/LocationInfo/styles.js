import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const height = Dimensions.get('window').height - 50;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.BGColor,
        height: height
    },
});

export default styles;