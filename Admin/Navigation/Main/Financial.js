import Income from '../../Component/Financial/Income'
import Expense from '../../Component/Financial/Expense'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const FinancialTopNav = createMaterialTopTabNavigator({
    Pendapatan : {
        screen : Income,
        navigationOptions : {
            title : 'Pendapatan'
        }
    },
    Pengeluaran : {
        screen : Expense,
        navigationOptions : {
            title : 'Pengeluaran'
        }
    }
},{
    tabBarOptions : {
        activeTintColor : 'black',
        inactiveTintColor : 'white',
        style : {
            borderTopColor : '#fff',
            shadowColor : '#a1aab8',
            backgroundColor : '#a56cc1',
            height : 50,
        }
    }
})

export default FinancialTopNav