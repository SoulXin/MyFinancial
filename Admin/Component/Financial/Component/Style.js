import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 10
    },
    text_input : {
        borderWidth : 1,
        borderRadius : 5,
        padding : 10,
        fontSize : 16
    },
    row_price_input : {
        flexDirection : 'row',
        marginTop : 10
    },
    container_submit : {
        flex : 1,
        justifyContent : "center",
        alignItems : 'center'
    },
    button_submit : {
        backgroundColor : '#17b978',
        borderRadius : 5,
        padding : 15
    },
    button_delete : {
        backgroundColor : '#ff9999',
        borderRadius : 5,
        marginTop : 8,
        marginRight : 5
    },
    container_loading : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    loading : {
        padding : 50,
        borderRadius : 10,
        backgroundColor : 'white',
        borderWidth : 3,
        borderColor : '#a56cc1'
    },
    loading_text : {
        color : '#a56cc1',
        fontWeight : 'bold',
        fontSize : 24,
        textAlign : 'center',
    },
    text_button : {
        color : 'white',
        fontSize : 14
    }
})

export default styles