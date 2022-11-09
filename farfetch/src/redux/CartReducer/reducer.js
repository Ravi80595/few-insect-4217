import * as types from "./actionType"

const CartState={
    Cartitem:[]
}

export const reducer=(state=CartState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.ADD_TO_CART:{
            return{
               ...state,
               Cartitem:payload
            }
        }
        
        case types.REMOVE_TO_CART:{
            const cartAfterItemRemoval = state.filter(
                (item)=>item.id === payload
              )
              return cartAfterItemRemoval
        }
        case types.CHECKOUT:{
            return []
        }
        default:{
            return state;
        }
    }
}