import { BUY_CAKE } from "./actions"

const initialState = {
    numOfCakes:10
}

export const cakeReducer = (prevState=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...prevState,
                numOfCakes:prevState.numOfCakes-1
            }
        default:
            return prevState
    }
}