

let data=[]

const addToCart=(payload)=>{
    data.push(payload)
    localStorage.setItem('CartData',JSON.stringify(data))   
}

const removeToCart=()=>{
    // const cartAfterItemRemoval = data.filter(
    //     (item)=>item.id === action.payload)
          
}
const checkoutCart=()=>{
    return{
     
    }
}



export {addToCart,removeToCart,checkoutCart}