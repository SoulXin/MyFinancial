import {AsyncStorage} from 'react-native'

const checkUserSignedIn = async (setName,setEmail,navigation) =>{
    try {
       let value = await AsyncStorage.getItem('data_login');
        if (value != null){
            // do something
            let value_parse = JSON.parse(value);
            setName(value_parse.user.name);
            setEmail(value_parse.user.email);
            return value_parse
        }else{
            navigation.navigate('Login')
        }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
}

export {
    checkUserSignedIn
}