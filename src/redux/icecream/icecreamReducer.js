import { BUY_ICECREAM } from "./actions"

const initialState = {
    numOfIcecream:10
}

export const icecreamReducer = (prevState=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...prevState,
                numOfIcecream:prevState.numOfIcecream-1
            }
        default:
            return prevState
    }
}