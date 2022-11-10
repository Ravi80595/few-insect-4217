import * as types from "./actionType"
// import { useNavigate } from "react-router-dom"


const removeToCart=()=>{
    return{
        type:types.REMOVE_TO_CART,
        
    }
}
const checkoutCart=()=>{
    return{
        type:types.CHECKOUT
    }
}

let data=[]

const addToCart=(payload)=>{
data.push(payload)
localStorage.setItem('CartData',JSON.stringify(data))
// navigate("/cartPage")
console.log(data)
}

export {addToCart,removeToCart,checkoutCart}