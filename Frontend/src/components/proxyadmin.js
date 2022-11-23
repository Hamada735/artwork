import React from 'react'
import Admin from './admin';

function ProxyAdmin(props) {
    if (props.orders == null){
        return (
            <div>
            <p>Error loading :(</p>
            <button onClick={()=>window.location.reload()}>Reload me</button>
            </div>
          )
    }
    else{
        return (
            <Admin orders={props.orders} reloadpaintings={props.reloadpaintings}/>
          )
    }
  
}

export default ProxyAdmin