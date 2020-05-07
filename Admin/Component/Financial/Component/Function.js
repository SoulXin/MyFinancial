import {removeFormatMoney} from '../../../GlobalFunctions/Functions'
import axios from'axios'

const handleAdd = (
    user_Id,
    information,
    price,
    type,
    data,
    setPrice,
    setInformation,
    setData) => {

    if(information.length && price.length){
        const add_data = {
            user_id : user_Id,
            text : information,
            price : removeFormatMoney(price),
            type : type
        }

        axios({
            method : 'POST',
            url : 'http://192.168.43.171:5000/financial/add_financial',
            data : add_data
        })
        .then(response => {
            const temp_data = data;
            temp_data.push(response.data);
            setPrice(0);
            setInformation('');
            setData(temp_data);
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const handleDelete = (id,data,setData) => {
    const temp_data = data.filter(list => list._id !== id);
    axios({
        method : 'DELETE',
        url : `http://192.168.43.171:5000/financial/delete_financial/${id}`
    })
    .then(response => {
        setData(temp_data);
    })
    .catch(error => {
        console.log(error);
    })
}

export {
    handleAdd,
    handleDelete
}