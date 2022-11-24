import React from 'react';
import Admin from './admin';
import Navbar from './navbar';

function ProxyAdmin(props) {
    if (props.orders == null){
        return (
            <div>
            <p>Loading ...</p>
            <button onClick={()=>window.location.reload()}>Reload me</button>
            </div>
          )
    }
    else{
        return (
            <>
            <Navbar/>
            <Admin orders={props.orders} reloadpaintings={props.reloadpaintings}/>
            </>
          )
    }
  
}

export default ProxyAdmin