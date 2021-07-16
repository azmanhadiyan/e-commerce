import { cartActionTypes } from "./reducer";

export const addCart = (product) =>{
    return{
        type : cartActionTypes.ADD_CART,
        dataCart : product
    }
}