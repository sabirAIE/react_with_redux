import React from 'react'
import {buyCake} from '../../redux/cake/actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'

function CakeComponent(props) {
    useEffect(()=>{
        console.log('load')
    },[])
    return (
        <div>
            <h3>hii</h3>
            <h2>No of cake {props.numOfCakes}</h2>
            <button onClick={()=>props.buyCake()}>buy</button>
        </div>
    )
}

// This mapStateToProps accepts two parameters state and ownProps
// OwnProps is the props that are prvided from the parent component
const mapStateToProps = (state,ownProps)=>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

// This mapDispatchToProps accepts two parameters dispatch and ownProps
// OwnProps is the props that are prvided from the parent component
// its upto us that we want to use and customize our logic or not
const mapDispathToProps = (dispatch)=>{
    return {
        buyCake: ()=>dispatch(buyCake())
    }
}

// Sometime we only use mapState or mapDispatch 
// in this case pass null for the unused parameters
export default connect(mapStateToProps,mapDispathToProps)(CakeComponent)