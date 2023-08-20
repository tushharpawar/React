import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
         <img style={{width:"43px"}} src={loading} alt="" />
     </div>
    )
  }
}

export default Spinner