import React, { Component } from 'react'
import Loader from './Loader.gif'
const Spinner=()=>  {
 
    return (
<div>
    <img src={Loader} alt='loading' style={{width:'1300px' ,height:'9px'}}></img>
</div>
    )
  
}

export default Spinner