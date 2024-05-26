import { loginFailure, loginLoading, loginSuccess } from "./actionTypes"

import axios from "axios"

export const PostLogin=(data)=>{
    return async(dispatch)=>{
        dispatch({type:loginLoading})
        try{
            const res= await axios.post("http://localhost:3000/user/login",data)
            console.log(res.data.token)
            dispatch({type:loginSuccess,payload:res.data.token})
           
        }catch(e){
            dispatch({type:loginFailure})
        }
    }
 }