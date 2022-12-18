import axios from  'axios'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const FAILED = 'FAILED' 

//ACTION CREATORS
export const callingAPI = ()=>{
    return {
        type:FETCHING
    }
}

export const gettingData = (users)=>{
    return {
        type:FETCHED,
        payload:users
    }
}

export const raiseError = (error)=>{
    return {
        type:FAILED,
        payload:error
    }
}


//this is a async action creator, it does not accept any parameters
export const fetchUsers = ()=>{

    return (dispatch)=>{
        dispatch(callingAPI())
        axios.get('https://dummyjson.com/users').then(res=>{
            console.log(res)
            dispatch(gettingData(res.data.users))
        }).catch(error=>{
            dispatch(raiseError(error.message))
        })
    }
}