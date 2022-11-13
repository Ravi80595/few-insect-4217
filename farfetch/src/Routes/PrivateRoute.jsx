import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute=()=>{
    const success=useSelector((state)=>state.Auth.sucess)
    const navigate=useNavigate()
    console.log(success)

    useEffect(()=>{
        
            if (success===false) {
              navigate("/");
            }else {
                navigate("/payment")
            }

    },[success])

    }

export default PrivateRoute;