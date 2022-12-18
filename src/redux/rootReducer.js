import { combineReducers } from "redux";

import { cakeReducer } from "./cake/cakeReducer";
import { userReducer } from "./user/userReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";


const rootReducer = combineReducers({
    user:userReducer,
    cake:cakeReducer,
    icecream:icecreamReducer,
})

export default rootReducer