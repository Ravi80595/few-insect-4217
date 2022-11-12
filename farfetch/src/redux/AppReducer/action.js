import * as types from "./actionType"
import axios from 'axios'

const getDataRequest=()=>{
    return{
        type:types.GET_DATA_REQUEST
    }
}
const getDataSuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
const getDataFailure=()=>{
    return{
        type:types.GET_DATA_FAILURE
    }
}


// Data Fetching Here

const getData=(queryParams)=>(dispatch)=>{
    // console.log(queryParams)
         dispatch(getDataRequest())
return axios("http://localhost:8080/products",queryParams).then((r)=>{
        dispatch(getDataSuccess(r.data))
        // console.log(r.data)
    }).catch((e)=>{
        dispatch(getDataFailure())
        console.log(e)
    })
}

const getShoes=()=>(dispatch)=>{
 return axios("http://localhost:8080/products?type=shoes").then((r)=>{
    dispatch(getDataSuccess(r.data))
 })
}

const getTrouser=()=>(dispatch)=>{
    return axios("http://localhost:8080/products?type=shoes&type=trouser").then((r)=>{
       dispatch(getDataSuccess(r.data))
    })
   }



export {getDataRequest,getDataSuccess,getDataFailure,getData,getShoes,getTrouser}