import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/user/actions'

function UserComponent(props) {

  useEffect(()=>{
    props.fetchUsers()
  },[])


  return (
    <>
      <h2>user list</h2>
      {
        props.userData.users.map((u,i)=>(
          <p key={i}>{u.firstName}</p>
        ))
      }
    </>
  )
}


const mapStateToProps =(state,ownProps)=>{
  return {
    // this proprty will be available in the props of the component as a state vailable
    userData:state.user
  }
}

const mapDispatchToProps =(dispatch,ownProps)=>{
  return{
    // this property will be available in the props of the component as a callable
    fetchUsers:()=>dispatch(fetchUsers())
  }
}



//finally we are connecting the maps with the component using connect method
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent)