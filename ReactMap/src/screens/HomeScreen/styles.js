import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BGColor,
        alignContent:'center',
        flexDirection:'column',
    },

    map:{
        flex:1,
        width: width,
        height: height,
    },

    user:{
        marginLeft:200,
        marginTop:50,
    },

    addLocationPosition: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },

});

export default styles;