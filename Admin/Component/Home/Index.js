import React,{useCallback,useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { useFocusEffect } from 'react-navigation-hooks'
import {formatMoney, date} from '../../GlobalFunctions/Functions'
import axios from 'axios';
import styles from './Component/Style'
import {checkUserSignedIn} from './Component/Function'
import Loading from '../Modal_Loading/Loading';

const index = ({navigation}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [income,setIncome] = useState([]);
    const [expense,setExpense] = useState([]);
    const [cashFlow,setCashFlow] = useState([]);
    const [loading,setLoading] = useState(false);

    useFocusEffect(useCallback(() => {
        setLoading(true);
        const source = axios.CancelToken.source();
        const temp_total_income = [];
        const temp_total_expense = [];

        checkUserSignedIn(setName,setEmail,navigation)
        .then(res => {
            const loadData = async () => {
                try{
                    const response = await axios.get(`http://192.168.43.171:5000/financial/show_cashflow/${res.user._id}`,{cancelToken : source.token});
                    setCashFlow(response.data);
                    setLoading(false);
                    response.data.map(list => {
                        if(list.type === "income"){
                            temp_total_income.push(list.price)
                            var sum_total = temp_total_income.reduce(function(a, b){
                                return a + b;
                            }, 0);
                            setIncome(sum_total);
                        }else if(list.type === "expense"){
                            temp_total_expense.push(list.price)
                            var sum_total = temp_total_expense.reduce(function(a, b){
                                return a + b;
                            }, 0);
                            setExpense(sum_total);
                        }
                    })
                }catch (error) {
                    if(axios.isCancel(error)){
                        console.log("Response has been cancel TableList")
                    }else{
                        throw error
                    }
                }
            };
            loadData();
        })
        .catch(err => {
            console.log(err)
        })

        return () => {
            source.cancel();
            setCashFlow([]);
            setIncome([]);
            setExpense([]);
        }
    },[]));



    const _renderItem = ({item,index}) => {
        return (
            <View style = {item.type === "income" ? styles.row_income : styles.row_expense}>
                <View style = {{flex : 2}}>
                    <Text>{date(item.date)}</Text>
                    <Text>Rp.{formatMoney(item.price)}</Text>
                </View>
                <View style = {styles.informataion_cashflow}>
                    <Text style = {{fontWeight : 'bold'}}>{item.type === "income" ? "Pemasukan" : "Pengeluaran"}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style = {styles.container}>
            <Loading loading = {loading} />
            <View style = {styles.row}>
                <View style = {{flex : 1}}>
                    <Text style = {styles.title}>{name}</Text>
                    <Text>{email}</Text>
                </View>
                <View style = {{flex : 1}}>
                    <Text>Total :</Text>
                    <Text style = {styles.title}>Rp. {formatMoney(income - expense)}</Text>
                </View>
            </View>

            <View style = {styles.container_income_expense}>
                <View style = {styles.row_income_expense}>
                    <Text style = {{color : 'white'}}>Pemasukan</Text>
                    <Text style = {{color : 'white'}}>Rp. {formatMoney(income)}</Text>
                </View>

                <View style = {styles.row_income_expense}>
                    <Text style = {{color : 'white'}}>Pengeluaran</Text>
                    <Text style = {{color : 'white'}}>Rp. {formatMoney(expense)}</Text>
                </View>
            </View>
            
            <View style = {{marginTop : 20}}>
                <Text style = {styles.title_cashflow}>Riwayat Arus Kas</Text>
                <FlatList
                    keyExtractor = {(item,index) => index.toString()}
                    data = {cashFlow}
                    renderItem = {_renderItem}
                    style = {{height : '75%'}}
                />
            </View>
        </View>
    )
}

export default index