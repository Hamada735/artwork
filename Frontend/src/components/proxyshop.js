import React from 'react';
import Shop from './shop';
import Navbar from './navbar';

function Proxyshop(props) {
    if (props.paintings == null){
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
            <Shop paintings={props.paintings}/>
            </>
          )
    }
  
}

export default Proxyshop