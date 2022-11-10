import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config"
import * as types from "./actionType"


   const signAuth=(email,pass)=>async (dispatch)=>{
        try{
            const user= await createUserWithEmailAndPassword(auth,email,pass);
            // localStorage.setItem("signup",JSON.stringify(user))
            dispatch(({
                type:types.GET_SIGNUP_SUCCESS,
                payload:user
            }))

        }
        catch(err){
          dispatch({type:types.GET_SIGNUP_FAILURE})
            console.log(err)
        }
      }

      const LoginAuth=(email,pass)=>async (dispatch)=>{
        try{
            const user= await signInWithEmailAndPassword(auth,email,pass);
            // localStorage.setItem("login",JSON.stringify(user))
            dispatch(({
                type:types.GET_LOGIN_SUCCESS,
                payload:user
            }))

        }
        catch(err){
            console.log(err)
            dispatch({type:types.GET_LOGIN_FAILURE})
        }
      }

export {signAuth,LoginAuth}