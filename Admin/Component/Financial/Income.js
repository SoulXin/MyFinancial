import React,{useState,useCallback} from 'react'
import { View, TextInput,TouchableOpacity,SafeAreaView,FlatList } from 'react-native'
import { ListItem, Body, Text,Right,Button } from 'native-base';
import { useFocusEffect } from 'react-navigation-hooks'
import {formatRupiah,formatMoney,date} from '../../GlobalFunctions/Functions'
import {checkUserSignedIn} from '../../GlobalFunctions/Functions'
import {handleAdd,handleDelete} from './Component/Function'
import axios from'axios'
import styles from './Component/Style'
import Loading from '../Modal_Loading/Loading'

const Income = ({navigation}) => {
    const [data,setData] = useState([]);
    const [price,setPrice] = useState(0);
    const [information,setInformation] = useState('');
    const [user_Id,setUser_Id] = useState('');
    const [loading,setLoading] = useState(false);

    useFocusEffect(useCallback(() => {
        setLoading(true);
        const source = axios.CancelToken.source();
        checkUserSignedIn(navigation)
        .then(res => {
            setUser_Id(res.user._id)
            const loadData = async () => {
                try{
                    const response = await axios.get(`http://192.168.43.171:5000/financial/show_financial/income/${res.user._id}`,{cancelToken : source.token});
                    setData(response.data);
                    setLoading(false);
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
        .catch(error => {
            console.log(error)
        })
        return () => {
            source.cancel();
            setData([]);
            setInformation('');
            setPrice('');
            setUser_Id('');
        }
    },[]));
    
    const _renderItem = ({item,index }) => {
        return (
            <ListItem thumbnail>
                <Body>
                    <Text note>{date(item.date)}</Text>
                    <Text>{item.text}</Text>
                    <Text>Rp.{formatMoney(item.price)}</Text>
                </Body>
                <Right>
                    <Button 
                        style = {styles.button_delete} 
                        onPress = {() => handleDelete(item._id,data,setData)}
                    >
                        <Text style = {styles.text_button}>Hapus</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
    
    return (
        <View style = {styles.container}>
            <Loading loading = {loading}/>
            <FlatList
                data = {data}
                renderItem = {_renderItem}
                keyExtractor = {(item,index) => index.toString()}
            />
            <View style = {{borderTopWidth : 1}}>
                <Text>Keterangan</Text>
                <TextInput
                    value = {information}
                    style = {styles.text_input}
                    onChangeText = {(e) => setInformation(e)}
                    returnKeyType = "next" 
                    onSubmitEditing = {() => inputPrice.focus()}
                />
                <View style = {styles.row_price_input}>
                    <View style = {{flex : 2}}>
                        <Text>Pendapatan</Text>
                        <TextInput
                            value = {price ? price.toString() : ''}
                            style = {styles.text_input}
                            keyboardType = "number-pad"
                            onChangeText = {(e) => formatRupiah(e,'Rp. ',setPrice)}
                            returnKeyType = "done"
                            ref = {(input) => inputPrice = input}
                        />
                    </View>
                    <View style = {styles.container_submit}>
                        <TouchableOpacity 
                            style = {styles.button_submit} 
                            onPress = {() => handleAdd(user_Id,information,price,"income",data,setPrice,setInformation,setData)}
                        >
                            <Text style = {styles.text_button}>Masukan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    
        </View>
    )
}

export default Income