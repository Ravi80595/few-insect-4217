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

const getData=()=>(dispatch)=>{
    dispatch(getDataRequest())
   return axios("http://localhost:8080/products").then((r)=>{
        dispatch(getDataSuccess(r.data))
        // console.log(r.data)
    }).catch((e)=>{
        dispatch(getDataFailure())
        console.log(e)
    })
}



export {getDataRequest,getDataSuccess,getDataFailure,getData}