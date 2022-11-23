import React from 'react'
import Shop from './shop';

function Proxyshop(props) {
    if (props.paintings == null){
        return (
            <div>
            <p>Error loading :(</p>
            <button onClick={()=>window.location.reload()}>Reload me</button>
            </div>
          )
    }
    else{
        return (
            <Shop paintings={props.paintings}/>
          )
    }
  
}

export default Proxyshop