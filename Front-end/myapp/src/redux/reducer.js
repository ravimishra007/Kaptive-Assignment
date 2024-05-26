import { loginFailure, loginLoading, loginSuccess } from "./actionTypes"

const initialValue={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:null,
}

export const authReducer=(state=initialValue,{type,payload})=>{
    switch (type) {
        case loginLoading:
            return{
                ...state,
                isLoading:true
        }
        case loginSuccess:
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload,
        }
        case loginFailure:
            return{
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:null,
        }     
        
        default:
          return  state;
    }
}