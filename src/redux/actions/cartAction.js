import { CART}   from '../actionTyps'
import {cartStorage} from '../storage'
import { AsyncStorage } from 'react-native';
export const addToCartAction  = newProduct=>{
    return async(dispatch , getState)=>{
        let products = [...getState()[cartStorage],{...newProduct}]

        //Baraye Save Kardan Info Az SynTax Zir Estafade Mikonam . 
        await AsyncStorage.setItem(cartStorage,JSON.stringify(products)); 
        dispatch({type:CART , data : products}) ; 
    }
}

export const deleteFromCartAction  = productId =>{
    return async dispatch =>{
        // aval getItem Mikonim Ba shakle Zir
        await AsyncStorage.getItem(cartStorage)
        .then((data)=>{
            let cartProducts  = JSON.parse(data) ; 
            return cartProducts.filter(p=>{
                p.id!=productId
            }) ; 
        }).then((products)=>{
            AsyncStorage.setItem(cartStorage,JSON.stringify(products)) ; 
            dispatch({type : CART , data : products})
        })
    }
}