import * as types from "./actionType"
const initialState = {
    SignUp: [],
    Login:[],
    isLoading: false,
    isLError: false,
    isSError: false,
  };

  
export const reducer = (state = initialState,action) => {
  const {type,payload}=action;

  switch(type){
    case types.GET_SIGNUP_SUCCESS:
        return{
            ...state,
            SignUp:payload,
            isLError: false,
        }

    case types.GET_SIGNUP_FAILURE:
      return{
        isLError:true
      }

    case types.GET_LOGIN_SUCCESS:
        return{
            ...state,
            Login:payload
        }

    case types.GET_LOGIN_FAILURE:
      return{
        isSError:true
      }
  }
return state;
};

export default reducer