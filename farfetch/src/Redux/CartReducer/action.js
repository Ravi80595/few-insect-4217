import * as types from "./actionType"

const addToCart=(payload)=>{
    return{
        type:types.ADD_TO_CART,
        payload
    }
}
const removeToCart=(payload)=>{
    return{
        type:types.REMOVE_TO_CART,
        payload
    }
}
const checkoutCart=()=>{
    return{
        type:types.CHECKOUT
    }
}

export {addToCart,removeToCart,checkoutCart}