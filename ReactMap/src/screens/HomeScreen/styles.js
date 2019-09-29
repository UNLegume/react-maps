import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const contentHeight = height - 50

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BGColor,
        alignContent:'center',
        flexDirection:'column',
        height: contentHeight
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

    centerMarker: {
        position: 'absolute',
        left: '49%',
        top: '49%',
        width: '2%',
        height: '2%',
        backgroundColor: colors.CenterMarker,
    }

});

export default styles;