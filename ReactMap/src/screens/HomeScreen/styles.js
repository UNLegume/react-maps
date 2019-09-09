import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BGColor,
        alignContent:'center',
        flexDirection:'column',
    },
    map:{
        flex:1,
    },

    user:{
        marginLeft:200,
        marginTop:50,
    },


});

export default styles;