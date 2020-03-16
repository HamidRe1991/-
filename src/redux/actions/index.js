import {CART}  from '../actionTyps';
import {cartStorage}  from '../storage';
import { AsyncStorage } from 'react-native';
export default  initDataAction=(()=>{
    return async dispactch=>{
        await AsyncStorage .getItem(cartStorage)
        .then((products)=>{
            if(products != null){
                products = JSON.parse(products)
            }else {
                products = [] ; 
                dispactch({type:CART , data:products}) ; 
            }
        })
    }
});