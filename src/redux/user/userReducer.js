import { FETCHING,FETCHED,FAILED } from "./actions"

const initialState = {
        loading:false,
        users:[],
        error:''
    }

export const userReducer = (prevState=initialState, action)=>{
    switch (action.type) {
        case FETCHING:
            return{
                ...prevState,
                loading:true
            }
        case FETCHED:
            return{
                ...prevState,
                loading:false,
                users:action.payload,
                error:''
            }
        case FAILED:
            return{
                ...prevState,
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return prevState
    }
}