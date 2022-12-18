import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../../redux/icecream/actions'

function IceCreamComponent(props) {
    
    return (
        <div>
            <h3>hii</h3>
            <h2>No of Ice Cream {props.numOfIcecream}</h2>
            <button onClick={()=>props.buyIcecream()}>buy ice</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        numOfIcecream:state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyIcecream:()=>dispatch(buyIcecream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)