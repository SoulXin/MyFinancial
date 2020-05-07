import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 10
    },
    row : {
        flexDirection : 'row'
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold' 
    },
    container_income_expense : {
        flexDirection : 'row',
        padding : 10,
        borderRadius : 5,
        marginTop : 20,
        backgroundColor : '#a56cc1',
    },
    row_income_expense : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title_cashflow : {
        fontWeight : 'bold',
        fontSize : 24
    },
    row_income : {
        flexDirection : 'row',
        borderRadius : 7,
        padding : 10,
        margin : 5,
        backgroundColor : '#17b978',
    },
    row_expense : {
        flexDirection : 'row',
        borderRadius : 7,
        padding : 10,
        margin : 5,
        backgroundColor : '#ff9999'
    },
    informataion_cashflow : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'flex-end'
    }
})

export default styles