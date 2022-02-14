import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30
    },  
    starTitle: {
        fontSize: 16,
        fontWeight: '600'
    },  
    starTitleText: {
        fontSize: 16,
        marginTop: 10
    },
    mainBtn: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: (width / 2) - 50,
        height: 40,
        borderRadius: 100,

    },  
    redSymbol: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 100,
        marginLeft: 20,
    },
    detailTextLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailText: {
        fontSize: 16,
        marginLeft: 50
    },
    mainText: {
        fontSize: 16,
        fontWeight: '400',
    },  
    imagePic: {
        width: width - 50,
        height: 170,
        marginTop: 50
    }
})