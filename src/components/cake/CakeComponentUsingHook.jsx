import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../../redux/cake/actions'

function CakeComponentUsingHook() {
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h4>using Hooks</h4>
            <h1>Number of Cakes-{numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>buy Cake</button>
        </div>
    )
}

export default CakeComponentUsingHook