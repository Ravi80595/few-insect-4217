import * as types from "./actionType"
const initialState = {
    SignUp: [],
    Login:[],
    sucess:false,
    isLoading: false,
    isLError: false,
    isLMError:[],
    isSError: false,
    isSMError: [],
  };

  
export const reducer = (state = initialState,action) => {
  const {type,payload}=action;

  switch(type){
    case types.GET_SIGNUP_SUCCESS:
        return{
            ...state,
            SignUp:payload,
            isSError: false,
        }

    case types.GET_SIGNUP_FAILURE:
      return{
        ...state,
        isSError:true,
        isSMError:payload,
        SignUp:[]
      }

    case types.GET_LOGIN_SUCCESS:
        return{
            ...state,
            Login:payload,
            isLError:false,
            sucess:true,
        }

    case types.GET_LOGIN_FAILURE:
      return{
        ...state,
        isLError:true,
        isLMError:payload,
        Login:[],
        sucess:false,
      }
  }
return state;
};

export default reducer